import { Component, Input } from '@angular/core';
import { HlmCardDirective } from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'Card',
  standalone: true,
  imports: [HlmCardDirective],
  template: `
    <div hlmCard [class]="cardClass">
      <ng-content />
    </div>
  `,
  styles: `
    :host {
      display: contents;
    }
  `
})
export class CardComponent {
  /**
   * add tailwind classes to override defaults (e.g. 'text-2xl p-2')
   */
  @Input() cardClass = 'w-full';
}
