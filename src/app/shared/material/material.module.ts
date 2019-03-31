import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatProgressBarModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
  MatTableModule,
  MatDialogModule,
  MAT_DIALOG_DEFAULT_OPTIONS,
  MatPaginatorModule,
  MatPaginatorIntl,
  MatSortModule,
  MatSelectModule
} from '@angular/material';

import { APP_DI_CONFIG } from '../../core';

import { TablePaginatorIntl } from './table-paginator-intl';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatProgressBarModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule,
  MatSnackBarModule,
  MatTableModule,
  MatDialogModule,
  MatPaginatorModule,
  MatSortModule,
  MatSelectModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: APP_DI_CONFIG.snackBar
    },
    { provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: APP_DI_CONFIG.dialog },
    { provide: MatPaginatorIntl, useClass: TablePaginatorIntl }
  ]
})
export class MaterialModule {}
