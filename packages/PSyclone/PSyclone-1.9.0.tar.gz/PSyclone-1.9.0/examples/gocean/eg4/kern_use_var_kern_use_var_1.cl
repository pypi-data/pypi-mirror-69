__attribute__((reqd_work_group_size(4, 1, 1)))
__kernel void kern_use_var_code(
  __global double * restrict fld,
  double gravity
  ){
  int fldLEN1 = get_global_size(0);
  int fldLEN2 = get_global_size(1);
  int i = get_global_id(0);
  int j = get_global_id(1);
  fld[j * fldLEN1 + i] = (gravity * fld[j * fldLEN1 + i]);
}

