from . import advection, utilities
from .. import veros_method, runtime_settings as rs
from ..variables import allocate

"""
IDEMIX as in Olbers and Eden, 2013
"""


@veros_method
def set_idemix_parameter(vs):
    """
    set main IDEMIX parameter
    """
    bN0 = np.sum(np.sqrt(np.maximum(0., vs.Nsqr[:, :, :-1, vs.tau]))
                 * vs.dzw[np.newaxis, np.newaxis, :-1] * vs.maskW[:, :, :-1], axis=2) \
        + np.sqrt(np.maximum(0., vs.Nsqr[:, :, -1, vs.tau])) \
        * 0.5 * vs.dzw[-1:] * vs.maskW[:, :, -1]
    fxa = np.sqrt(np.maximum(0., vs.Nsqr[..., vs.tau])) / \
        (1e-22 + np.abs(vs.coriolis_t[..., np.newaxis]))
    cstar = np.maximum(1e-2, bN0[:, :, np.newaxis] / (vs.pi * vs.jstar))
    vs.c0[...] = np.maximum(0., vs.gamma * cstar * gofx2(vs, fxa) * vs.maskW)
    vs.v0[...] = np.maximum(0., vs.gamma * cstar * hofx1(vs, fxa) * vs.maskW)
    vs.alpha_c[...] = np.maximum(1e-4, vs.mu0 * np.arccosh(np.maximum(1., fxa))
                                 * np.abs(vs.coriolis_t[..., np.newaxis]) / cstar**2) * vs.maskW


@veros_method
def integrate_idemix(vs):
    """
    integrate idemix on W grid
    """
    a_tri, b_tri, c_tri, d_tri, delta = (allocate(vs, ('xt', 'yt', 'zw'), include_ghosts=False) for _ in range(5))
    forc = allocate(vs, ('xt', 'yt', 'zw'))
    maxE_iw = allocate(vs, ('xt', 'yt', 'zw'))

    """
    forcing by EKE dissipation
    """
    if vs.enable_eke:
        forc[...] = vs.eke_diss_iw
    else:  # shortcut without EKE model
        if vs.enable_store_cabbeling_heat:
            forc[...] = vs.K_diss_gm + vs.K_diss_h - \
                vs.P_diss_skew - vs.P_diss_hmix - vs.P_diss_iso
        else:
            forc[...] = vs.K_diss_gm + vs.K_diss_h - vs.P_diss_skew

    if vs.enable_eke and (vs.enable_eke_diss_bottom or vs.enable_eke_diss_surfbot):
        """
        vertically integrate EKE dissipation and inject at bottom and/or surface
        """
        a_loc = np.sum(vs.dzw[np.newaxis, np.newaxis, :-1] *
                       forc[:, :, :-1] * vs.maskW[:, :, :-1], axis=2)
        a_loc += 0.5 * forc[:, :, -1] * vs.maskW[:, :, -1] * vs.dzw[-1]
        forc[...] = 0.

        ks = np.maximum(0, vs.kbot[2:-2, 2:-2] - 1)
        mask = ks[:, :, np.newaxis] == np.arange(vs.nz)[np.newaxis, np.newaxis, :]
        if vs.enable_eke_diss_bottom:
            forc[2:-2, 2:-2, :] = utilities.where(vs, mask, a_loc[2:-2, 2:-2, np.newaxis] /
                                           vs.dzw[np.newaxis, np.newaxis, :], forc[2:-2, 2:-2, :])
        else:
            forc[2:-2, 2:-2, :] = utilities.where(vs, mask, vs.eke_diss_surfbot_frac * a_loc[2:-2, 2:-2, np.newaxis]
                                           / vs.dzw[np.newaxis, np.newaxis, :], forc[2:-2, 2:-2, :])
            forc[2:-2, 2:-2, -1] = (1. - vs.eke_diss_surfbot_frac) \
                                    * a_loc[2:-2, 2:-2] / (0.5 * vs.dzw[-1])

    """
    forcing by bottom friction
    """
    if not vs.enable_store_bottom_friction_tke:
        forc += vs.K_diss_bot

    """
    prevent negative dissipation of IW energy
    """
    maxE_iw[...] = np.maximum(0., vs.E_iw[:, :, :, vs.tau])

    """
    vertical diffusion and dissipation is solved implicitly
    """
    ks = vs.kbot[2:-2, 2:-2] - 1
    delta[:, :, :-1] = vs.dt_tracer * vs.tau_v / vs.dzt[np.newaxis, np.newaxis, 1:] * 0.5 \
        * (vs.c0[2:-2, 2:-2, :-1] + vs.c0[2:-2, 2:-2, 1:])
    delta[:, :, -1] = 0.
    a_tri[:, :, 1:-1] = -delta[:, :, :-2] * vs.c0[2:-2, 2:-2, :-2] \
        / vs.dzw[np.newaxis, np.newaxis, 1:-1]
    a_tri[:, :, -1] = -delta[:, :, -2] / (0.5 * vs.dzw[-1:]) * vs.c0[2:-2, 2:-2, -2]
    b_tri[:, :, 1:-1] = 1 + delta[:, :, 1:-1] * vs.c0[2:-2, 2:-2, 1:-1] / vs.dzw[np.newaxis, np.newaxis, 1:-1] \
        + delta[:, :, :-2] * vs.c0[2:-2, 2:-2, 1:-1] / vs.dzw[np.newaxis, np.newaxis, 1:-1] \
        + vs.dt_tracer * vs.alpha_c[2:-2, 2:-2, 1:-1] * maxE_iw[2:-2, 2:-2, 1:-1]
    b_tri[:, :, -1] = 1 + delta[:, :, -2] / (0.5 * vs.dzw[-1:]) * vs.c0[2:-2, 2:-2, -1] \
        + vs.dt_tracer * vs.alpha_c[2:-2, 2:-2, -1] * maxE_iw[2:-2, 2:-2, -1]
    b_tri_edge = 1 + delta / vs.dzw * vs.c0[2:-2, 2:-2, :] \
        + vs.dt_tracer * vs.alpha_c[2:-2, 2:-2, :] * maxE_iw[2:-2, 2:-2, :]
    c_tri[:, :, :-1] = -delta[:, :, :-1] / \
        vs.dzw[np.newaxis, np.newaxis, :-1] * vs.c0[2:-2, 2:-2, 1:]
    d_tri[...] = vs.E_iw[2:-2, 2:-2, :, vs.tau] + vs.dt_tracer * forc[2:-2, 2:-2, :]
    d_tri_edge = d_tri + vs.dt_tracer * \
        vs.forc_iw_bottom[2:-2, 2:-2, np.newaxis] / vs.dzw[np.newaxis, np.newaxis, :]
    d_tri[:, :, -1] += vs.dt_tracer * vs.forc_iw_surface[2:-2, 2:-2] / (0.5 * vs.dzw[-1:])
    sol, water_mask = utilities.solve_implicit(vs, ks, a_tri, b_tri, c_tri, d_tri, b_edge=b_tri_edge, d_edge=d_tri_edge)
    vs.E_iw[2:-2, 2:-2, :, vs.taup1] = utilities.where(vs, water_mask, sol, vs.E_iw[2:-2, 2:-2, :, vs.taup1])

    """
    store IW dissipation
    """
    vs.iw_diss[...] = vs.alpha_c * maxE_iw * vs.E_iw[..., vs.taup1]

    """
    add tendency due to lateral diffusion
    """
    if vs.enable_idemix_hor_diffusion:
        vs.flux_east[:-1, :, :] = vs.tau_h * 0.5 * (vs.v0[1:, :, :] + vs.v0[:-1, :, :]) \
            * (vs.v0[1:, :, :] * vs.E_iw[1:, :, :, vs.tau] - vs.v0[:-1, :, :] * vs.E_iw[:-1, :, :, vs.tau]) \
            / (vs.cost[np.newaxis, :, np.newaxis] * vs.dxu[:-1, np.newaxis, np.newaxis]) * vs.maskU[:-1, :, :]
        if vs.pyom_compatibility_mode:
            vs.flux_east[-5, :, :] = 0.
        else:
            vs.flux_east[-1, :, :] = 0.
        vs.flux_north[:, :-1, :] = vs.tau_h * 0.5 * (vs.v0[:, 1:, :] + vs.v0[:, :-1, :]) \
            * (vs.v0[:, 1:, :] * vs.E_iw[:, 1:, :, vs.tau] - vs.v0[:, :-1, :] * vs.E_iw[:, :-1, :, vs.tau]) \
            / vs.dyu[np.newaxis, :-1, np.newaxis] * vs.maskV[:, :-1, :] * vs.cosu[np.newaxis, :-1, np.newaxis]
        vs.flux_north[:, -1, :] = 0.
        vs.E_iw[2:-2, 2:-2, :, vs.taup1] += vs.dt_tracer * vs.maskW[2:-2, 2:-2, :] \
            * ((vs.flux_east[2:-2, 2:-2, :] - vs.flux_east[1:-3, 2:-2, :])
               / (vs.cost[np.newaxis, 2:-2, np.newaxis] * vs.dxt[2:-2, np.newaxis, np.newaxis])
               + (vs.flux_north[2:-2, 2:-2, :] - vs.flux_north[2:-2, 1:-3, :])
               / (vs.cost[np.newaxis, 2:-2, np.newaxis] * vs.dyt[np.newaxis, 2:-2, np.newaxis]))

    """
    add tendency due to advection
    """
    if vs.enable_idemix_superbee_advection:
        advection.adv_flux_superbee_wgrid(
            vs, vs.flux_east, vs.flux_north, vs.flux_top, vs.E_iw[:, :, :, vs.tau])

    if vs.enable_idemix_upwind_advection:
        advection.adv_flux_upwind_wgrid(
            vs, vs.flux_east, vs.flux_north, vs.flux_top, vs.E_iw[:, :, :, vs.tau])

    if vs.enable_idemix_superbee_advection or vs.enable_idemix_upwind_advection:
        vs.dE_iw[2:-2, 2:-2, :, vs.tau] = vs.maskW[2:-2, 2:-2, :] * (-(vs.flux_east[2:-2, 2:-2, :] - vs.flux_east[1:-3, 2:-2, :])
                                                                    / (vs.cost[np.newaxis, 2:-2, np.newaxis] * vs.dxt[2:-2, np.newaxis, np.newaxis])
                                                                    - (vs.flux_north[2:-2, 2:-2, :] - vs.flux_north[2:-2, 1:-3, :])
                                                                    / (vs.cost[np.newaxis, 2:-2, np.newaxis] * vs.dyt[np.newaxis, 2:-2, np.newaxis]))
        vs.dE_iw[:, :, 0, vs.tau] += -vs.flux_top[:, :, 0] / vs.dzw[0:1]
        vs.dE_iw[:, :, 1:-1, vs.tau] += -(vs.flux_top[:, :, 1:-1] - vs.flux_top[:, :, :-2]) \
            / vs.dzw[np.newaxis, np.newaxis, 1:-1]
        vs.dE_iw[:, :, -1, vs.tau] += - \
            (vs.flux_top[:, :, -1] - vs.flux_top[:, :, -2]) / (0.5 * vs.dzw[-1:])

        """
        Adam Bashforth time stepping
        """
        vs.E_iw[:, :, :, vs.taup1] += vs.dt_tracer * ((1.5 + vs.AB_eps) * vs.dE_iw[:, :, :, vs.tau]
                                                    - (0.5 + vs.AB_eps) * vs.dE_iw[:, :, :, vs.taum1])


@veros_method
def gofx2(vs, x):
    if vs.pyom_compatibility_mode:
        x[x < 3.] = 3.
    else:
        x = np.maximum(3., x)
    c = 1. - (2. / vs.pi) * np.arcsin(1. / x)
    return 2. / vs.pi / c * 0.9 * x**(-2. / 3.) * (1 - np.exp(-x / 4.3))


@veros_method
def hofx1(vs, x):
    eps = np.finfo(x.dtype).eps  # prevent division by zero
    x = np.maximum(1. + eps, x)
    return (2. / vs.pi) / (1. - (2. / vs.pi) * np.arcsin(1. / x)) * (x - 1.) / (x + 1.)
