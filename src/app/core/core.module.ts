import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';

import { throwIfAlreadyLoaded } from './module-import-guard';
import { translateLoaderFactory, jwtOptionsFactory } from './factories';
import { APP_CONFIG, APP_DI_CONFIG } from './app.config';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,

    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: translateLoaderFactory,
        deps: [HttpClient]
      }
    }),
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
        deps: []
      }
    })
  ],
  exports: [TranslateModule],
  providers: [{ provide: APP_CONFIG, useValue: APP_DI_CONFIG }]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
