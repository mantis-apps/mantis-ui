import { Component, Input } from '@angular/core';
import { HlmCardTitleDirective } from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'CardTitle',
  standalone: true,
  imports: [HlmCardTitleDirective],
  template: `
    <h3 hlmCardTitle [class]="titleClass">
      <ng-content />
    </h3>
  `
})
export class CardTitleComponent {
  /**
   * add tailwind classes to override defaults (e.g. 'text-2xl p-2')
   */
  @Input() titleClass = '';
}
