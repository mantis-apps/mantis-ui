import { Component, Input } from '@angular/core';
import { HlmCardDirective } from '@mantistech/spartanui-pack/ui-card-helm';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [HlmCardDirective],
  template: `
    <div hlmCard [class]="class">
      <ng-content />
    </div>
  `,
})
export class CardComponent {
  /**
   * add tailwind classes to override defaults (e.g. 'text-2xl p-2')
   */
  @Input() class = '';
}
