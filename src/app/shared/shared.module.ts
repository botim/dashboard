import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { MaterialModule } from './material/material.module';

const SHARED_COMPONENTS = [];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [RouterModule, CommonModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    MaterialModule,

    ...SHARED_COMPONENTS
  ]
})
export class SharedModule {}
