import {
  Component,
  ViewChild,
  AfterViewInit,
  OnDestroy,
  OnInit
} from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialog, MatPaginator, MatSort } from '@angular/material';
import { merge, Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { TranslateService } from '@ngx-translate/core';

import { UserStatus, Status, Platform } from '../../../models';

import { UserStatusesService } from '../../services/user-statuses.service';
// import { EditUserStatusDialog } from '../edit-user-status/edit-user-status.component';

@Component({
  selector: 'btm-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.scss']
})
export class ReportsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  public userStatuses$ = this._userStatusesService.userStatuses$;
  public displayedColumns = [
    'id',
    'platform',
    'username',
    'reasons',
    'status',
    'reportedAt',
    'actions'
  ];
  public defaultOrder = 'reportedAt';
  public defaultSort = 'asc';
  public filtersForm: FormGroup;
  public filterStatuses = [
    Status.REPORTED,
    Status.IN_PROCESS,
    Status.BOT,
    Status.NOT_BOT
  ];
  public filterPlatforms = [Platform.TWITTER, Platform.FACEBOOK];

  private _filterSubscription: Subscription;

  constructor(
    private _userStatusesService: UserStatusesService,
    private _translate: TranslateService,
    private _dialog: MatDialog,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.filtersForm = this._fb.group({
      status: [''],
      platform: ['']
    });
  }

  ngAfterViewInit() {
    this._filterSubscription = merge(
      this.paginator.page,
      this.sort.sortChange,
      this.filtersForm.valueChanges
    )
      .pipe(startWith(() => {}))
      .subscribe(() => {
        const { pageIndex } = this.paginator;
        const { active, direction } = this.sort;

        this._userStatusesService.list(
          pageIndex,
          active || this.defaultOrder,
          direction || this.defaultSort,
          this.filtersForm.value
        );
      });
  }

  ngOnDestroy() {
    this._filterSubscription.unsubscribe();
  }

  // TODO: export to functions or something, to make it reusable
  public renderColumn(column: string, row: UserStatus) {
    switch (column) {
      case 'platform':
        return this._translate.instant(`PLATFORM.${row[column]}`);

      case 'reasons':
        const reasonsTranslationKeys = row[column].map(
          reason => `REASON.${reason}`
        );

        return Object.values(
          this._translate.instant(reasonsTranslationKeys)
        ).join(', ');

      case 'status':
        return this._translate.instant(`STATUS.${row[column]}`);

      default:
        return row[column];
    }
  }

  public viewReportSource(userStatus: UserStatus, event: Event) {
    event.stopPropagation();

    const { replyCommentUrl, commentUrl, postUrl } = userStatus;

    window.open(replyCommentUrl || commentUrl || postUrl, '_blank');
  }

  public editUserStatus(userStatus: UserStatus) {
    // this._dialog.open(EditUserStatusDialog, { data: userStatus });
  }
}
