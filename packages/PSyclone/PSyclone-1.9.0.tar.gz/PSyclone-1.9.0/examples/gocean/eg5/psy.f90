  MODULE psy_test
    USE field_mod
    USE kind_params_mod
    IMPLICIT NONE
    CONTAINS
    SUBROUTINE invoke_0(a_fld, b_fld, c_fld, d_fld)
      USE init_field_mod, ONLY: init_field_code
      USE profile_psy_data_mod, ONLY: profile_PSyDataType
      TYPE(r2d_field), intent(inout) :: a_fld, b_fld, c_fld, d_fld
      INTEGER j
      INTEGER i
      TYPE(profile_PSyDataType), target, save :: profile_psy_data
      INTEGER istop, jstop
      !
      ! Look-up loop bounds
      istop = a_fld%grid%subdomain%internal%xstop
      jstop = a_fld%grid%subdomain%internal%ystop
      !
      CALL profile_psy_data%PreStart("psy_test", "invoke_0:r0", 0, 0)
      DO j=1,jstop+1
        DO i=1,istop+1
          CALL init_field_code(i, j, a_fld%data, 1.0)
        END DO
      END DO
      DO j=1,jstop+1
        DO i=1,istop+1
          CALL init_field_code(i, j, b_fld%data, 2.0)
        END DO
      END DO
      DO j=1,jstop+1
        DO i=1,istop+1
          CALL init_field_code(i, j, c_fld%data, 3.0)
        END DO
      END DO
      DO j=1,jstop+1
        DO i=1,istop+1
          CALL init_field_code(i, j, d_fld%data, 4.0)
        END DO
      END DO
      CALL profile_psy_data%PostEnd
    END SUBROUTINE invoke_0
    SUBROUTINE invoke_1_update_field(a_fld, b_fld, c_fld, d_fld)
      USE update_field_mod, ONLY: update_field_code
      USE profile_psy_data_mod, ONLY: profile_PSyDataType
      TYPE(r2d_field), intent(inout) :: a_fld, b_fld, c_fld, d_fld
      INTEGER j
      INTEGER i
      TYPE(profile_PSyDataType), target, save :: profile_psy_data
      INTEGER istop, jstop
      !
      ! Look-up loop bounds
      istop = a_fld%grid%subdomain%internal%xstop
      jstop = a_fld%grid%subdomain%internal%ystop
      !
      CALL profile_psy_data%PreStart("psy_test", "invoke_1_update_field:update_field_code:r0", 0, 0)
      DO j=1,jstop+1
        DO i=1,istop+1
          CALL update_field_code(i, j, a_fld%data, b_fld%data, c_fld%data, d_fld%data)
        END DO
      END DO
      CALL profile_psy_data%PostEnd
    END SUBROUTINE invoke_1_update_field
  END MODULE psy_test