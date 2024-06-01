import { Component, Input } from '@angular/core';
import { HlmCardContentDirective } from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'CardContent',
  standalone: true,
  imports: [HlmCardContentDirective],
  template: `
    <div hlmCardContent [class]="contentClass">
      <ng-content />
    </div>
  `
})
export class CardContentComponent {
  /**
   * add tailwind classes to override defaults (e.g. 'text-2xl p-2')
   */
  @Input() contentClass = '';
}
