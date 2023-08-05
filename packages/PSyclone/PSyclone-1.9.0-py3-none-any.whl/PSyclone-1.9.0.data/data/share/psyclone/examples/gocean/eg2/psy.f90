  MODULE psy_alg
    USE field_mod
    USE kind_params_mod
    IMPLICIT NONE
    CONTAINS
    SUBROUTINE invoke_0_inc_field(fld1, nx, ny, this_step)
      USE inc_field_0_mod, ONLY: inc_field_0_code
      TYPE(r2d_field), intent(inout) :: fld1
      INTEGER, intent(inout) :: nx, ny, this_step
      INTEGER j
      INTEGER i
      INTEGER istop, jstop
      !
      ! Look-up loop bounds
      istop = fld1%grid%subdomain%internal%xstop
      jstop = fld1%grid%subdomain%internal%ystop
      !
      !$acc enter data copyin(fld1,fld1%data,nx,ny,this_step)
      fld1%data_on_device = .true.
      !
      !$acc parallel default(present)
      !$acc loop collapse(2) independent
      DO j=2,jstop
        DO i=2,istop
          CALL inc_field_0_code(i, j, fld1%data, nx, ny, this_step)
        END DO
      END DO
      !$acc end parallel
    END SUBROUTINE invoke_0_inc_field
  END MODULE psy_alg