import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';

import { MaterialModule } from './material/material.module';

import {
  LayoutComponent,
  CardLoaderComponent,
  SelectInputComponent
} from './components';
import { MacroCasePipe } from './pipes';

const SHARED_COMPONENTS = [
  LayoutComponent,
  CardLoaderComponent,
  SelectInputComponent
];

const SHARED_PIPES = [MacroCasePipe];

@NgModule({
  declarations: [...SHARED_COMPONENTS, ...SHARED_PIPES],
  imports: [
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,
    MaterialModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    TranslateModule,
    MaterialModule,

    ...SHARED_COMPONENTS,
    ...SHARED_PIPES
  ]
})
export class SharedModule {}
