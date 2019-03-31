import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

import { UserStatus, Status } from '../../../models';

@Component({
  selector: 'btm-edit-user-status',
  templateUrl: './edit-user-status.component.html',
  styleUrls: ['./edit-user-status.component.scss']
})
export class EditUserStatusDialog implements OnInit {
  public form: FormGroup;
  public filterStatuses = [
    Status.REPORTED,
    Status.IN_PROCESS,
    Status.BOT,
    Status.NOT_BOT
  ];

  constructor(
    @Inject(MAT_DIALOG_DATA) public userStatus: UserStatus,
    private _dialogRef: MatDialogRef<EditUserStatusDialog>,
    private _fb: FormBuilder
  ) {}

  ngOnInit() {
    this.form = this._fb.group({
      status: [this.userStatus.status]
    });
  }

  public updateStatus() {
    this._dialogRef.close(this.form.value);
  }
}
