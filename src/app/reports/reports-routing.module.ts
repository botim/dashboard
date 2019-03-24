import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ReportsComponent } from './containers';

const reportsRoutes: Routes = [
  {
    path: '',
    component: ReportsComponent
    // TODO: create auth guard
  }
];

@NgModule({
  imports: [RouterModule.forChild(reportsRoutes)],
  exports: [RouterModule]
})
export class ReportsRoutingModule {}
