import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { Admin } from '../../models';
import { LoginForm, TOKEN_STORAGE_KEY } from '../../core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _admin: BehaviorSubject<Admin> = new BehaviorSubject<Admin>(null);

  public admin$ = this._admin.asObservable();

  constructor(private _http: HttpClient) {}

  public login(loginParams: LoginForm) {
    return this._http
      .post<Admin[]>(`${environment.apiUrl}/auth/login`, loginParams)
      .pipe(
        tap((response: any) => {
          const { token, admin } = response;

          this._admin.next(admin);
          localStorage.setItem(TOKEN_STORAGE_KEY, token);
        })
      );
  }
}
