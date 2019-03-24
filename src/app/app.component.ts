import { Component, HostBinding } from '@angular/core';

import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'btm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') classes = 'mat-typography';

  constructor(translate: TranslateService) {
    translate.use('he');
  }
}
