/*
 * Copyright (c) European Molecular Biology Laboratory, Christopher Kerr
 * SPDX-FileCopyrightText: 2016 European Molecular Biology Laboratory (EMBL)
 * SPDX-FileCopyrightText: 2019 Christopher Kerr
 *
 * SPDX-License-Identifier: LGPL-3.0-or-later
 *
 * This file is part of GALUMPH.
 *
 * GALUMPH is free software: you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as published
 * by the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * GALUMPH is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with GALUMPH.  If not, see <http://www.gnu.org/licenses/>.
 */

#define NPOWER 12
#define NITERDOWN 24

/* Spherical Bessel function J_L(r*s)
 *
 * For arrays r and s, calculate the Sperical Bessel function of the first
 * kind of r*s, for L values from 0 to LMAX
 */
#ifdef WORKSIZE
__attribute__((reqd_work_group_size(WORKSIZE,1,1)))
#endif
__kernel void jsph(const unsigned int LMAX,
                   const float r,
                   __constant float *restrict s,
                   __global float *restrict result)
{
  const size_t is = get_global_id(0);
  const size_t NS = get_global_size(0);

  unsigned int L = 0;
  size_t ils = is;

  const float rs = r * s[is];

  // For r*s <=2, use the first NPOWER terms of the power series
  if (rs <= 2)
  {
    int i;  // signed to allow iteration from NPOWER-1 to 0

    float total;
    float powers[NPOWER];

    const float rs2 = rs*rs;

    // Calculate power series terms for L=0
    // This is based on the power series expansion for sin(x)
    //
    // sin(x) = x^1/1! - x^3/3! + x^5/5! - ...
    //
    // J_0(x) = sin(x)/x = x^0/1! - x^2/3! + x^4/5! - ...
    //
    powers[0] = 1;
    for (i=1; i<NPOWER; ++i) {
      powers[i] = powers[i-1] * rs2 / (-1 * (2*i) * (2*i+1));
    }

    // Sum up power series terms for L=0
    // Summing in reverse direction to avoid losing precision
    total = 0;
    for (i=NPOWER-1; i>=0; --i) {
      total += powers[i];
    }
    result[ils] = total;

    // For higher L the terms of the power series are derived
    // using the formula:
    //
    // J_L(x) = (-x)^L (1/x d/dx)^L (sin(x)/x)
    //
    // Working from the power series expansion of sin(x)/x:
    //
    //           J_0(x) ->   J_1(x) ->   J_2(x) -> J_3(x)
    // 1st term   +1/1  ->     0
    // 2nd term -x^2/3! ->   +2x/3! ->     0
    // 3rd term +x^4/5! -> -4x^3/5! -> +8x^2/5! -> 0
    //
    // The factor from the first term of the expansion  of J_0(x)
    // to the first non-zero term of J_1(x) is x/3, from this to
    // the first non-zero term of J_2(x) is x/5 and so on
    //
    // In general the factor from the ith non-zero term of J_{L-1}(x)
    // to the ith non-zero term of J_L(x) is: x/(2*L+2*i+1)

    for (L=1; L<=LMAX; ++L) {
      ils = L * NS + is;
      total = 0;
      for (i=NPOWER-1; i>=0; --i) {
        powers[i] *= rs / (2*i + 2*L + 1);
        total += powers[i];
      }
      result[ils] = total;
    }
  }
  // For r*s > 2, the power series requires too many terms to converge,
  // instead it is better to use an iteration algorithm based on the
  // recurrence relation:
  //
  //     (2*L+1) * J_L(x) == x * (J_{L-1}(x) + J_{L+1}(x))
  //
  // This can either be used for an upwards or downwards iteration,
  // the choice depends on numerical stability
  else
  {
    const float rX = 1/rs;

    // For L > r*s the upwards recurrence relation is numerically unstable
    // LMAX_up is the maximum L for the upwards recurrence algorithm
    const unsigned int LMAX_up = min(LMAX,(uint)floor(rs));

    float t0 = cos(rs) * rX;
    float t1 = sin(rs) * rX;
    float t2;
    // sum_up is used in the normalisation of the downwards iteration
    float sum_up = t1*t1;
    result[ils] = t1;

    // Calculate Jl for L <= r*s using the upwards recurrence relation
    // The first terms of the upwards recurrence are known exactly, so
    // there is no need for a pre-iteration or any normalisation
    for (L=1; L<=LMAX_up; ++L) {
      ils = L * NS + is;
      t2 = (2*L-1) * t1 * rX - t0;
      t0 = t1;
      t1 = t2;
      sum_up += (2*L+1) * t2*t2;
      result[ils] = t2;
    }

    // If LMAX > r*s, the remaining L values must be calculated using the
    // downwards recurrence relation. The iteration is started with the
    // arbitrary values 0.0 and 1.0, it is assumed that NITERDOWN iterations
    // are sufficient to converge to the correct ratio between values.
    // To normalise the calculated values, the identity
    //     \Sigma_{L=0}^{\infinity} (2*L+1) (J_L(x))^2 == 1
    // is used. First the unnormalised values are stored in the output
    // array then, once the normalisation factor is known, they are read
    // back and multiplied by the normalisation factor.
    if (LMAX_up < LMAX) {
      const unsigned int Lstart_down = LMAX + NITERDOWN;
      t0 = 0;
      t1 = 1;
      float sum_down = 0;
      int exponent;
      for (L=Lstart_down; L>LMAX_up; --L) {
        t2 = (2*L+3) * t1 * rX - t0;
        sum_down += (2*L+1) * t2*t2;
        // Store the un-normalised J value in the output array
        // The number is stored before frexp shifting so that the exponent
        // can be retrieved later during normalisation
        if (L <= LMAX) {
          ils = L * NS + is;
          result[ils] = t2;
        }
        // Shift large numbers to the range 0.5-1.0 to avoid overflow
        exponent = ilogb(t2);
        if (exponent > 0) {
          t0 = ldexp(t1, -exponent);
          t1 = ldexp(t2, -exponent);
          sum_down = ldexp(sum_down, -2*exponent);
        } else {
          t0 = t1;
          t1 = t2;
        }
      }
      // The sum over L of (2*L+1)*J(L)**2 should equal 1.0
      // This gives us the normalisation factor for the downward recurrence
      float normalise = sqrt((1-sum_up)/sum_down);
      for (L=LMAX_up+1; L<=LMAX; ++L) {
        ils = L * NS + is;
        t2 = result[ils];
        // Load the exponent and adjust the normalisation constant
        exponent = ilogb(t2);
        if (exponent > 0) {
          normalise = ldexp(normalise, -exponent);
        }
        result[ils] = t2 * normalise;
      }
    }
  }

}


/* Many-atom version of the spherical Bessel J_L(r*s) kernel
 *
 * For arrays r and s, calculate the Sperical Bessel function of the first
 * kind of r*s, for L values from 0 to LMAX.
 */
#ifdef WORKSIZE
__attribute__((reqd_work_group_size(WORKSIZE,1,1)))
#endif
__kernel void jsph_batch(
    const unsigned int LMAX,
    __constant float *restrict r,
    __constant float *restrict s,
    __global float *restrict result)
{
  const size_t NS = get_global_size(0);
  const unsigned int iAt = get_global_id(1);

  const size_t NLS = (LMAX+1) * NS;

  jsph(LMAX, r[iAt], s, result + (iAt * NLS));
}
  

/* Integral of the spherical Bessel function
 *
 * Given as input an array of Bessel function values J_L(r*s)
 * (e.g. as calculated by the jsph() kernel), calculate
 *
 * \Integral_{0}^{R} r^2 J_L(r*S) dr
 *
 * The actual calculation done is:
 * 
 * (R/S)^3 * \Integral_{0}^{S} s^2 J_L(R*s) ds
 *
 * using the trapezium rule on the individual samples.
 * The input array is overwritten with the output.
 *
 * The size of one row of the array (i.e. the size of the S vector)
 * must fit into local memory (i.e. max 8192 samples).
 *
 * The work group shape should be (WORKSIZE, 1, 1) and
 * the number of groups should be (1, LMAX+1, 1)
 * NS should divide evenly by WORKSIZE (i.e. NS % WORKSIZE == 0)
 */
#ifdef WORKSIZE
__attribute__((reqd_work_group_size(WORKSIZE,1,1)))
#endif
__kernel void jsph_integral(const unsigned int NS,
                            const float r,
                            __constant float *restrict s,
                            __global float *restrict jl,
                            __local float *jlsum)
{
  const unsigned int ithread = get_local_id(0);
#ifdef WORKSIZE
  const unsigned int nthreads = WORKSIZE;
#else
  const unsigned int nthreads = get_local_size(0);
#endif
  const unsigned int nperthread = NS / nthreads;
  const unsigned int L = get_global_id(1);

  // Read the jl and s arrays and calculate the trapezium
  // area of the individual steps

  for (uint ibase=0; ibase < NS; ibase += nthreads) {
    size_t is = ibase + ithread;
    size_t ils = L*NS + is;
    if (is > 0) {
      float j1 = jl[ils-1];
      float j2 = jl[ils];
      float s1 = s[is-1];
      float s2 = s[is];
      jlsum[is] = (j2 + j1) * (pown(s2, 3) - pown(s1, 3)) / 6;
    } else {
      jlsum[is] = 0;
    }
  }

  barrier(CLK_LOCAL_MEM_FENCE);

  // Sum the values in this thread's "own" region
  size_t ibeg = ithread * nperthread;
  size_t iend = (ithread+1) * nperthread;

  float current_sum = 0;
  for (size_t is=ibeg; is < iend; ++is) {
    current_sum += jlsum[is];
    jlsum[is] = current_sum;
  }

  // Parallel sum-scan of the last values in each region
  for (uint bit=1; bit < nthreads; bit<<=1) {
    barrier(CLK_LOCAL_MEM_FENCE);

    if (ithread & bit) {
      size_t ilast = iend - 1;
      unsigned int iprev = ithread - (ithread % bit) - 1;
      size_t iprevlast = (iprev + 1) * nperthread - 1;
      // N.B. iprev % bit is always 0
      // therefore the iprev thread does not enter this if() section
      // and so jlsum[iprevlast] is not overwritten during this iteration
      // i.e. no race condition
      jlsum[ilast] += jlsum[iprevlast];
    }
  }

  barrier(CLK_LOCAL_MEM_FENCE);

  // Add the sum of all previous values to the other values in this region
  if (ithread > 0) {
    current_sum = jlsum[ibeg-1];
  } else {
    current_sum = 0;
  }
  for (uint is=ibeg; is < iend-1; ++is) {
    jlsum[is] += current_sum;
  }

  barrier(CLK_LOCAL_MEM_FENCE);

  // Scale by R/S to get the integral over R not S
  for (uint ibase=0; ibase < NS; ibase += nthreads) {
    size_t is = ibase + ithread;
    size_t ils = L*NS + is;
    if (is > 0) {
      jl[ils] = jlsum[is] * pown(r / s[is], 3);
    } else {
      jl[ils] = (L == 0) ? pown(r, 3) / 3 : 0;
    }
  }
}
