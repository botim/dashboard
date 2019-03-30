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
  MatSelectModule
} from '@angular/material';

import { APP_DI_CONFIG } from '../../core';

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
  MatSelectModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES,
  providers: [
    {
      provide: MAT_SNACK_BAR_DEFAULT_OPTIONS,
      useValue: APP_DI_CONFIG.snackBar
    }
  ]
})
export class MaterialModule {}
