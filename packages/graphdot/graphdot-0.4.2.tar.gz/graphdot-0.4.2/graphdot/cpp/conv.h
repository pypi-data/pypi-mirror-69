#ifndef GRAPHDOT_CONV_H_
#define GRAPHDOT_CONV_H_

namespace graphdot {

template<class K, class X, class Y>
inline __host__ __device__ float conv(K const k, X const x, Y const y) {
    float sum = 0;
    for(auto const &i: x) {
        for(auto const &j: y) {
            sum += k(i, j);
        }
    }
    return sum;
}

}

#endif