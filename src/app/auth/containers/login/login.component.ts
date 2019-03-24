import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'btm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hidePassword = true;
  public form: FormGroup;
  public isLoading = false;

  constructor(private _fb: FormBuilder, private _router: Router) {}

  ngOnInit() {
    this._initForm();
  }

  /**
   * Initialize form controls.
   */
  private _initForm() {
    // TODO: add more validations
    this.form = this._fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  /**
   * Login click event.
   */
  public onLogin() {
    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;

    // TODO: call api service and then navigate
  }
}
