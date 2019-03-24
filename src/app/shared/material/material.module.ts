import { NgModule } from '@angular/core';
import {
  MatToolbarModule,
  MatProgressBarModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatToolbarModule,
  MatProgressBarModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule,
  MatSidenavModule,
  MatListModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule {}
