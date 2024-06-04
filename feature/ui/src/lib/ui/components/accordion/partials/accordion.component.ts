import { Component, Input } from '@angular/core';
import { BrnAccordionDirective, BrnAccordionItemDirective, BrnAccordionTriggerDirective } from '@spartan-ng/ui-accordion-brain';
import {
  HlmAccordionDirective,
} from '@spartan-ng/ui-accordion-helm';

@Component({
  selector: '[Accordion]',
  standalone: true,
  imports: [HlmAccordionDirective,],
  providers: [BrnAccordionDirective, BrnAccordionItemDirective, BrnAccordionTriggerDirective],
  hostDirectives: [HlmAccordionDirective],
  template: `
    <div [class]="class">
      <ng-content />
    </div>
  `,
})
export class AccordionComponent {
  @Input() class = '';
}
