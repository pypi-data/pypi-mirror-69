__attribute__((reqd_work_group_size(4, 1, 1)))
__kernel void compute_cv_code(
  __global double * restrict cv,
  __global double * restrict p,
  __global double * restrict v
  ){
  int cvLEN1 = get_global_size(0);
  int cvLEN2 = get_global_size(1);
  int pLEN1 = get_global_size(0);
  int pLEN2 = get_global_size(1);
  int vLEN1 = get_global_size(0);
  int vLEN2 = get_global_size(1);
  int i = get_global_id(0);
  int j = get_global_id(1);
  cv[j * cvLEN1 + i] = ((0.5e0 * (p[j * pLEN1 + i] + p[(j - 1) * pLEN1 + i])) * v[j * vLEN1 + i]);
}

