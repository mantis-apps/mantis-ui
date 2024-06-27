import { Component, Input } from '@angular/core';
import { HlmCardDescriptionDirective } from '@spartan-ng/ui-card-helm';

@Component({
  selector: 'CardDescription',
  standalone: true,
  imports: [HlmCardDescriptionDirective],
  template: `
    <p hlmCardDescription [class]="descriptionClass">
      <ng-content />
    </p>
  `
})
export class CardDescriptionComponent {
  /**
   * add tailwind classes to override defaults (e.g. 'text-2xl p-2')
   */
  @Input() descriptionClass = '';
}
