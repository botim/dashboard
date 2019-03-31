import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

import { environment } from '../../../environments/environment';
import { UserStatus } from '../../models';
import { Pagination } from 'src/app/core';

@Injectable({ providedIn: 'root' })
export class UserStatusesService {
  private _userStatuses = new BehaviorSubject<Pagination<UserStatus>>(null);

  public userStatuses$ = this._userStatuses.asObservable();

  constructor(private _http: HttpClient) {}

  public list(page: number = 0, order?: string, sort?: string, filters?: any) {
    return this._http
      .get<Pagination<UserStatus>>(`${environment.apiUrl}/statuses`, {
        params: { page: `${page}`, order, sort: sort.toUpperCase(), ...filters }
      })
      .subscribe(response => {
        const userStatuses = { ...response };

        userStatuses.items.forEach((userStatus: UserStatus, index: number) => {
          userStatuses.items[index] = new UserStatus(userStatus);
        });

        this._userStatuses.next(userStatuses);
      });
  }

  public update(id: number, updatedUserStatus: Partial<UserStatus>) {
    return this._http.put(
      `${environment.apiUrl}/statuses/${id}`,
      updatedUserStatus
    );
  }
}
