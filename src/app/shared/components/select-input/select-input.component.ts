import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'btm-select-input',
  templateUrl: './select-input.component.html',
  styleUrls: ['./select-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectInputComponent {
  @Input() parent: FormGroup;
  @Input() controlName: string;
  @Input() options: string[];
  @Input() selected: string;
  @Input() showNoneOption = true;
}
