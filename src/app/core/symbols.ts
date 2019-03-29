import { FormGroup } from '@angular/forms';

export class FormGroupTyped<T> extends FormGroup {
  public get value(): T {
    return this.value;
  }
}

export interface LoginForm {
  email: string;
  password: string;
}
