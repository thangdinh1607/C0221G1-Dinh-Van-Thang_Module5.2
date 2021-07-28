import {AbstractControl} from '@angular/forms';

export function comparePassword(control: AbstractControl) {
  const v = control.value;
  if (v.password === v.confirmPassword) {
    return null;
  } else {
    return {passwordNotMatch: true};
  }
}
