import { NgModule } from '@angular/core';
import {
  MatProgressBarModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatProgressBarModule,
  MatInputModule,
  MatCardModule,
  MatIconModule,
  MatButtonModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})
export class MaterialModule {}
