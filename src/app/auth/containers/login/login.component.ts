import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

import { TranslateService } from '@ngx-translate/core';

import { FormGroupTyped, LoginForm } from '../../../core';

import { AuthService } from '../../services';

@Component({
  selector: 'btm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public hidePassword = true;
  public form: FormGroupTyped<LoginForm>;
  public isLoading = false;

  constructor(
    private _fb: FormBuilder,
    private _router: Router,
    private _authService: AuthService,
    private _snackBar: MatSnackBar,
    private _translate: TranslateService
  ) {}

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

    this._authService.login(this.form.value).subscribe(
      () => this._router.navigateByUrl('/reports'),
      () => {
        const error = this._translate.instant('ERRORS.INVALID_LOGIN');
        this._snackBar.open(error);

        this.isLoading = false;
      }
    );
  }
}
