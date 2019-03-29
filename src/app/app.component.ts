import { Component, HostBinding, Inject } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

import { APP_CONFIG, AppConfig } from './core';

@Component({
  selector: 'btm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') classes = 'mat-typography';

  constructor(
    @Inject(APP_CONFIG) config: AppConfig,
    translate: TranslateService
  ) {
    translate.use(config.defaultLanguage);
  }
}
