import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

import { User } from '../../models';
import { LoginForm, TOKEN_STORAGE_KEY } from '../../core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _user: BehaviorSubject<User> = new BehaviorSubject<User>(null);

  public user$ = this._user.asObservable();

  constructor(private _http: HttpClient) {}

  public login(loginParams: LoginForm) {
    return this._http
      .post<User[]>(`${environment.apiUrl}/auth/login`, loginParams)
      .pipe(
        tap((response: any) => {
          const { token, user } = response;

          this._user.next(user);
          localStorage.setItem(TOKEN_STORAGE_KEY, token);
        })
      );
  }
}
