import { FormGroup } from '@angular/forms';

export class FormGroupTyped<T> extends FormGroup {
  public get value(): T {
    return this.value;
  }
}

// TODO: move to some other file in the right place
export interface LoginForm {
  email: string;
  password: string;
}
