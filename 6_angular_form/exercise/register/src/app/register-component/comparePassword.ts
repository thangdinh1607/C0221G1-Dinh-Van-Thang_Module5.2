
import {AbstractControl, ValidationErrors} from '@angular/forms';

export function comparePassword(control: AbstractControl ): ValidationErrors | null{
  const v = control.value;
  return (v.password === v.confirmPassword) ? null : {comparePassword: true};
}
