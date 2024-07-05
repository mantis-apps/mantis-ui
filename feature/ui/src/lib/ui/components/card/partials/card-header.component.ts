import { Component, Input } from '@angular/core';
import { HlmCardHeaderDirective } from '@mantistech/spartanui-pack/ui-card-helm';

@Component({
  selector: 'CardHeader',
  standalone: true,
  imports: [HlmCardHeaderDirective],
  template: `
    <div hlmCardHeader [class]="headerClass">
      <ng-content />
    </div>
  `
})
export class CardHeaderComponent {
  @Input() headerClass = '';
}
