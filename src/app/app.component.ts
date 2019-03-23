import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'btm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  @HostBinding('class') classes = 'mat-typography';
}
