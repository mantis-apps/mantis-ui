import { Component, Input } from '@angular/core';
import { HlmCardFooterDirective } from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'CardFooter',
  standalone: true,
  imports: [HlmCardFooterDirective],
  template: `
    <div hlmCardFooter [class]="footerClass">
      <ng-content />
    </div>
  `
})
export class CardFooterComponent {
  /**
   * add tailwind classes to override defaults (e.g. 'text-2xl p-2')
   */
  @Input() footerClass = '';
}
