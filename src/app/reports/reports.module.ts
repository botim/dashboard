import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { ReportsRoutingModule } from './reports-routing.module';

import { ReportsComponent, EditUserStatusDialog } from './containers';

@NgModule({
  imports: [SharedModule, ReportsRoutingModule],
  declarations: [ReportsComponent, EditUserStatusDialog],
  entryComponents: [EditUserStatusDialog]
})
export class ReportsModule {}
