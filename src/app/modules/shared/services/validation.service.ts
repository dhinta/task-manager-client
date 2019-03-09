import { Injectable } from '@angular/core';
import { AbstractControl, Validators, ValidatorFn, FormGroup } from '@angular/forms';

import { ValidationMessage } from '../models/common';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  constructor() {
  }

  comparePassword (messageObj: ValidationMessage): ValidatorFn {
    return (group: FormGroup) => {
      const passwd = group.controls.password.value,
          rePasswd = group.controls.repassword.value;
      if (passwd !== rePasswd) {
        return {...messageObj, passMismatch: true};
      }

      return null;
    };
  }

  email (messageObj: ValidationMessage): ValidatorFn {
    return (control: AbstractControl) => {
      if (Validators.email(control)) {
        return {...messageObj, email: true};
      }

      return null;
    };
  }

  groupRequired (messageObj: ValidationMessage): ValidatorFn {
    return (group: FormGroup) => {
      let nonEmptyCount = 0;
      const keys: string[] = Object.keys(group.controls);
      for (let i = 0; i < keys.length; i++) {
        if (group.controls[keys[i]].value !== '') {
          nonEmptyCount++;
        }
      }

      if (nonEmptyCount > 0 && nonEmptyCount < keys.length) {
        return {...messageObj, groupRequired: true};
      }
      return null;
    };
  }

  minLength (messageObj: ValidationMessage, minLength: number): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value && control.value.length < minLength) {
        return {...messageObj, email: true};
      }

      return null;
    };
  }

  required (messageObj: ValidationMessage): ValidatorFn {
    return (control: AbstractControl) => {
      // console.log(messageObj, control);
      if (Validators.required(control)) {
        return {...messageObj, required: true};
      }

      return null;
    };
  }
}
