import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'btm-filter-select',
  templateUrl: './filter-select.component.html',
  styleUrls: ['./filter-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterSelectComponent {
  @Input() parent: FormGroup;
  @Input() controlName: string;
  @Input() options: string[];
}
