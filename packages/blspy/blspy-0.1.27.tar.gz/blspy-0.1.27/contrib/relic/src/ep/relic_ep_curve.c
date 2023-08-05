/*
 * RELIC is an Efficient LIbrary for Cryptography
 * Copyright (C) 2007-2019 RELIC Authors
 *
 * This file is part of RELIC. RELIC is legal property of its developers,
 * whose names are not listed here. Please refer to the COPYRIGHT file
 * for contact information.
 *
 * RELIC is free software; you can redistribute it and/or modify it under the
 * terms of the version 2.1 (or later) of the GNU Lesser General Public License
 * as published by the Free Software Foundation; or version 2.0 of the Apache
 * License as published by the Apache Software Foundation. See the LICENSE files
 * for more details.
 *
 * RELIC is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the LICENSE files for more details.
 *
 * You should have received a copy of the GNU Lesser General Public or the
 * Apache License along with RELIC. If not, see <https://www.gnu.org/licenses/>
 * or <https://www.apache.org/licenses/>.
 */

/**f
 * @file
 *
 * Implementation of the prime elliptic curve utilities.
 *
 * @ingroup ep
 */

#include "relic_core.h"

/*============================================================================*/
/* Private definitions                                                        */
/*============================================================================*/

/**
 * Detects an optimization based on the curve coefficients.
 *
 * @param[out] opt		- the resulting optimization.
 * @param[in] a			- the curve coefficient.
 */
static void detect_opt(int *opt, fp_t a) {
	fp_t t;

	fp_null(t);

	TRY {
		fp_new(t);
		fp_prime_conv_dig(t, 3);
		fp_neg(t, t);

		if (fp_cmp(a, t) == RLC_EQ) {
			*opt = RLC_MIN3;
		} else if (fp_is_zero(a)) {
			*opt = RLC_ZERO;
		} else if (fp_cmp_dig(a, 1) == RLC_EQ) {
			*opt = RLC_ONE;
		} else if (fp_cmp_dig(a, 2) == RLC_EQ) {
			*opt = RLC_TWO;
		} else if (fp_bits(a) <= RLC_DIG) {
			*opt = RLC_TINY;
		} else {
			*opt = RLC_HUGE;
		}
	}
	CATCH_ANY {
		THROW(ERR_CAUGHT);
	}
	FINALLY {
		fp_free(t);
	}
}

static void ep_curve_set_map(void) {
	bn_t t;
	bn_null(t);

	const int abNeq0 = (ep_curve_opt_a() != RLC_ZERO) && (ep_curve_opt_b() != RLC_ZERO);

	ctx_t *ctx = core_get();
	dig_t *c1 = ctx->ep_map_c[0];
	dig_t *c2 = ctx->ep_map_c[1];
	dig_t *c3 = ctx->ep_map_c[2];
	dig_t *c4 = ctx->ep_map_c[3];

	TRY {
		bn_new(t);

		if (ep_curve_is_ctmap() || abNeq0) {
			/* SSWU map constants */
			/* constants 3 and 4: a and b for either the curve or the isogeny */
#ifdef EP_CTMAP
			if (ep_curve_is_ctmap()) {
				fp_copy(c3, ctx->ep_iso.a);
				fp_copy(c4, ctx->ep_iso.b);
			} else {
#endif
				fp_copy(c3, ctx->ep_a);
				fp_copy(c4, ctx->ep_b);
#ifdef EP_CTMAP
			}
#endif
			/* constant 1: -b / a */
			fp_neg(c1, c3);     /* c1 = -a */
			fp_inv(c1, c1);     /* c1 = -1 / a */
			fp_mul(c1, c1, c4); /* c1 = -b / a */

			/* constant 2 is unused in this case */
		} else {
			/* SvdW map constants */
			/* constant 1: g(u) = u^3 + a * u + b */
			fp_sqr(c1, ctx->ep_map_u);
			fp_add(c1, c1, ctx->ep_a);
			fp_mul(c1, c1, ctx->ep_map_u);
			fp_add(c1, c1, ctx->ep_b);

			/* constant 2: -u / 2 */
			fp_set_dig(c2, 1);
			fp_neg(c2, c2);                /* -1 */
			fp_hlv(c2, c2);                /* -1/2 */
			fp_mul(c2, c2, ctx->ep_map_u); /* c2 = -1/2 * u */

			/* constant 3: sqrt(-g(u) * (3 * u^2 + 4 * a)) */
			fp_sqr(c3, ctx->ep_map_u);    /* c3 = u^2 */
			fp_mul_dig(c3, c3, 3);        /* c3 = 3 * u^2 */
			fp_mul_dig(c4, ctx->ep_a, 4); /* c4 = 4 * a */
			fp_add(c4, c3, c4);           /* c4 = 3 * u^2 + 4 * a */
			fp_neg(c4, c4);               /* c4 = -(3 * u^2 + 4 * a) */
			fp_mul(c3, c4, c1);           /* c3 = -g(u) * (3 * u^2 + 4 * a) */
			if (!fp_srt(c3, c3)) {        /* c3 = sqrt(-g(u) * (3 * u^2 + 4 * a)) */
				THROW(ERR_NO_VALID);
			}
			/* make sure sgn0(c3) == 0 */
			fp_prime_back(t, c3);
			if (bn_get_bit(t, 0) != 0) {
				/* set sgn0(c3) == 0 */
				fp_neg(c3, c3);
			}

			/* constant 4: -4 * g(u) / (3 * u^2 + 4 * a) */
			fp_inv(c4, c4);        /* c4 = -1 / (3 * u^2 + 4 * a) */
			fp_mul(c4, c4, c1);    /* c4 *= g(u) */
			fp_mul_dig(c4, c4, 4); /* c4 *= 4 */
		}
	}
	CATCH_ANY {
		THROW(ERR_CAUGHT);
	}
	FINALLY {
		bn_free(t);
	}
}

/*============================================================================*/
/* Public definitions                                                         */
/*============================================================================*/

void ep_curve_init(void) {
	ctx_t *ctx = core_get();
#ifdef EP_PRECO
	for (int i = 0; i < RLC_EP_TABLE; i++) {
		ctx->ep_ptr[i] = &(ctx->ep_pre[i]);
	}
#endif
	ep_set_infty(&ctx->ep_g);
	bn_init(&ctx->ep_r, RLC_FP_DIGS);
	bn_init(&ctx->ep_h, RLC_FP_DIGS);
#if defined(EP_ENDOM) && (EP_MUL == LWNAF || EP_FIX == COMBS || EP_FIX == LWNAF || !defined(STRIP))
	for (int i = 0; i < 3; i++) {
		bn_init(&(ctx->ep_v1[i]), RLC_FP_DIGS);
		bn_init(&(ctx->ep_v2[i]), RLC_FP_DIGS);
	}
#endif
}

void ep_curve_clean(void) {
	ctx_t *ctx = core_get();
	bn_clean(&ctx->ep_r);
	bn_clean(&ctx->ep_h);
#if defined(EP_ENDOM) && (EP_MUL == LWNAF || EP_FIX == LWNAF || !defined(STRIP))
	for (int i = 0; i < 3; i++) {
		bn_clean(&(ctx->ep_v1[i]));
		bn_clean(&(ctx->ep_v2[i]));
	}
#endif
}

dig_t *ep_curve_get_b(void) {
	return core_get()->ep_b;
}

dig_t *ep_curve_get_a(void) {
	return core_get()->ep_a;
}

#if defined(EP_ENDOM) && (EP_MUL == LWNAF || EP_FIX == COMBS || EP_FIX == LWNAF || EP_SIM == INTER || !defined(STRIP))

dig_t *ep_curve_get_beta(void) {
	return core_get()->beta;
}

void ep_curve_get_v1(bn_t v[]) {
	ctx_t *ctx = core_get();
	for (int i = 0; i < 3; i++) {
		bn_copy(v[i], &(ctx->ep_v1[i]));
	}
}

void ep_curve_get_v2(bn_t v[]) {
	ctx_t *ctx = core_get();
	for (int i = 0; i < 3; i++) {
		bn_copy(v[i], &(ctx->ep_v2[i]));
	}
}

#endif

int ep_curve_opt_a(void) {
	return core_get()->ep_opt_a;
}

int ep_curve_opt_b(void) {
	return core_get()->ep_opt_b;
}

int ep_curve_is_endom(void) {
	return core_get()->ep_is_endom;
}

int ep_curve_is_super(void) {
	return core_get()->ep_is_super;
}

int ep_curve_is_pairf(void) {
	return core_get()->ep_is_pairf;
}

int ep_curve_is_ctmap(void) {
	return core_get()->ep_is_ctmap;
}

void ep_curve_get_gen(ep_t g) {
	ep_copy(g, &core_get()->ep_g);
}

void ep_curve_get_ord(bn_t n) {
	bn_copy(n, &core_get()->ep_r);
}

void ep_curve_get_cof(bn_t h) {
	bn_copy(h, &core_get()->ep_h);
}

const ep_t *ep_curve_get_tab(void) {
#if defined(EP_PRECO)

	/* Return a meaningful pointer. */
#if ALLOC == AUTO
	return (const ep_t *)*core_get()->ep_ptr;
#else
	return (const ep_t *)core_get()->ep_ptr;
#endif

#else
	/* Return a null pointer. */
	return NULL;
#endif
}


iso_t ep_curve_get_iso() {
#ifdef EP_CTMAP
	return &core_get()->ep_iso;
#else
	return NULL;
#endif /* EP_CTMAP */
}

#if defined(EP_PLAIN)

void ep_curve_set_plain(const fp_t a, const fp_t b, const ep_t g, const bn_t r,
		const bn_t h, const fp_t u, int ctmap) {
	ctx_t *ctx = core_get();
	ctx->ep_is_endom = 0;
	ctx->ep_is_super = 0;
	ctx->ep_is_ctmap = ctmap;

	fp_copy(ctx->ep_a, a);
	fp_copy(ctx->ep_b, b);
	fp_copy(ctx->ep_map_u, u);

	detect_opt(&(ctx->ep_opt_a), ctx->ep_a);
	detect_opt(&(ctx->ep_opt_b), ctx->ep_b);

	ep_curve_set_map();

	ep_norm(&(ctx->ep_g), g);
	bn_copy(&(ctx->ep_r), r);
	bn_copy(&(ctx->ep_h), h);

#if defined(EP_PRECO)
	ep_mul_pre((ep_t *)ep_curve_get_tab(), &(ctx->ep_g));
#endif
}

#endif

#if defined(EP_SUPER)

void ep_curve_set_super(const fp_t a, const fp_t b, const ep_t g, const bn_t r,
		const bn_t h, const fp_t u, int ctmap) {
	ctx_t *ctx = core_get();
	ctx->ep_is_endom = 0;
	ctx->ep_is_super = 1;
	ctx->ep_is_ctmap = ctmap;

	fp_copy(ctx->ep_a, a);
	fp_copy(ctx->ep_b, b);
	fp_copy(ctx->ep_map_u, u);

	detect_opt(&(ctx->ep_opt_a), ctx->ep_a);
	detect_opt(&(ctx->ep_opt_b), ctx->ep_b);

	ep_curve_set_map();

	ep_norm(&(ctx->ep_g), g);
	bn_copy(&(ctx->ep_r), r);
	bn_copy(&(ctx->ep_h), h);

#if defined(EP_PRECO)
	ep_mul_pre((ep_t *)ep_curve_get_tab(), &(ctx->ep_g));
#endif
}

#endif

#if defined(EP_ENDOM)

void ep_curve_set_endom(const fp_t a, const fp_t b, const ep_t g, const bn_t r,
		const bn_t h, const fp_t beta, const bn_t l, const fp_t u, int ctmap) {
	int bits = bn_bits(r);
	ctx_t *ctx = core_get();
	ctx->ep_is_endom = 1;
	ctx->ep_is_super = 0;
	ctx->ep_is_ctmap = ctmap;

	fp_copy(ctx->ep_a, a);
	fp_copy(ctx->ep_b, b);
	fp_copy(ctx->ep_map_u, u);

	detect_opt(&(ctx->ep_opt_a), ctx->ep_a);
	detect_opt(&(ctx->ep_opt_b), ctx->ep_b);

	ep_curve_set_map();

#if EP_MUL == LWNAF || EP_FIX == COMBS || EP_FIX == LWNAF || EP_SIM == INTER || !defined(STRIP)
	fp_copy(ctx->beta, beta);
	bn_gcd_ext_mid(&(ctx->ep_v1[1]), &(ctx->ep_v1[2]), &(ctx->ep_v2[1]),
			&(ctx->ep_v2[2]), l, r);
	/* r = (v1[1] * v2[2] - v1[2] * v2[1]) / 2. */
	bn_mul(&(ctx->ep_v1[0]), &(ctx->ep_v1[1]), &(ctx->ep_v2[2]));
	bn_mul(&(ctx->ep_v2[0]), &(ctx->ep_v1[2]), &(ctx->ep_v2[1]));
	bn_sub(&(ctx->ep_r), &(ctx->ep_v1[0]), &(ctx->ep_v2[0]));
	bn_hlv(&(ctx->ep_r), &(ctx->ep_r));
	/* v1[0] = round(v2[2] * 2^|n| / l). */
	bn_lsh(&(ctx->ep_v1[0]), &(ctx->ep_v2[2]), bits + 1);
	if (bn_sign(&(ctx->ep_v1[0])) == RLC_POS) {
		bn_add(&(ctx->ep_v1[0]), &(ctx->ep_v1[0]), &(ctx->ep_r));
	} else {
		bn_sub(&(ctx->ep_v1[0]), &(ctx->ep_v1[0]), &(ctx->ep_r));
	}
	bn_dbl(&(ctx->ep_r), &(ctx->ep_r));
	bn_div(&(ctx->ep_v1[0]), &(ctx->ep_v1[0]), &(ctx->ep_r));
	if (bn_sign(&ctx->ep_v1[0]) == RLC_NEG) {
		bn_add_dig(&(ctx->ep_v1[0]), &(ctx->ep_v1[0]), 1);
	}
	/* v2[0] = round(v1[2] * 2^|n| / l). */
	bn_lsh(&(ctx->ep_v2[0]), &(ctx->ep_v1[2]), bits + 1);
	if (bn_sign(&(ctx->ep_v2[0])) == RLC_POS) {
		bn_add(&(ctx->ep_v2[0]), &(ctx->ep_v2[0]), &(ctx->ep_r));
	} else {
		bn_sub(&(ctx->ep_v2[0]), &(ctx->ep_v2[0]), &(ctx->ep_r));
	}
	bn_div(&(ctx->ep_v2[0]), &(ctx->ep_v2[0]), &(ctx->ep_r));
	if (bn_sign(&ctx->ep_v2[0]) == RLC_NEG) {
		bn_add_dig(&(ctx->ep_v2[0]), &(ctx->ep_v2[0]), 1);
	}
	bn_neg(&(ctx->ep_v2[0]), &(ctx->ep_v2[0]));
#endif

	ep_norm(&(ctx->ep_g), g);
	bn_copy(&(ctx->ep_r), r);
	bn_copy(&(ctx->ep_h), h);

#if defined(EP_PRECO)
	ep_mul_pre((ep_t *)ep_curve_get_tab(), &(ctx->ep_g));
#endif
}

#endif
