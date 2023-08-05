__attribute__((reqd_work_group_size(4, 1, 1)))
__kernel void compute_z_code(
  __global double * restrict z,
  __global double * restrict p,
  __global double * restrict u,
  __global double * restrict v,
  double dx,
  double dy
  ){
  int zLEN1 = get_global_size(0);
  int zLEN2 = get_global_size(1);
  int pLEN1 = get_global_size(0);
  int pLEN2 = get_global_size(1);
  int uLEN1 = get_global_size(0);
  int uLEN2 = get_global_size(1);
  int vLEN1 = get_global_size(0);
  int vLEN2 = get_global_size(1);
  int i = get_global_id(0);
  int j = get_global_id(1);
  z[j * zLEN1 + i] = ((((4.0e0 / dx) * (v[j * vLEN1 + i] - v[j * vLEN1 + (i - 1)])) - ((4.0e0 / dy) * (u[j * uLEN1 + i] - u[(j - 1) * uLEN1 + i]))) / (((p[(j - 1) * pLEN1 + (i - 1)] + p[(j - 1) * pLEN1 + i]) + p[j * pLEN1 + i]) + p[j * pLEN1 + (i - 1)]));
}

