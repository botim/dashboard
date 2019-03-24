import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from './material/material.module';

import { LayoutComponent, CardLoaderComponent } from './components';

const SHARED_COMPONENTS = [LayoutComponent, CardLoaderComponent];

@NgModule({
  declarations: [...SHARED_COMPONENTS],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,

    TranslateModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,
    MaterialModule,

    ...SHARED_COMPONENTS
  ]
})
export class SharedModule {}
