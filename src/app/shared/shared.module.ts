import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

const SHARED_COMPONENTS = [];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [RouterModule, CommonModule, FormsModule, MaterialModule],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    ...SHARED_COMPONENTS
  ]
})
export class SharedModule {}
