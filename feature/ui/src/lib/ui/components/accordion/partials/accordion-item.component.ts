import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { BrnAccordionContentComponent, BrnAccordionDirective, BrnAccordionItemDirective } from '@spartan-ng/ui-accordion-brain';
import { HlmAccordionIconDirective, HlmAccordionItemDirective, HlmAccordionTriggerDirective } from '@spartan-ng/ui-accordion-helm';

@Component({
  selector: 'AccordionItem',
  standalone: true,
  imports: [HlmAccordionItemDirective, BrnAccordionContentComponent, HlmIconComponent, HlmAccordionTriggerDirective, HlmAccordionIconDirective],
  providers: [BrnAccordionDirective, BrnAccordionItemDirective],
  template: `
    <div hlmAccordionItem [class]="class">
      <ng-content />
    </div>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
})
export class AccordionItemComponent {
  @Input() class = '';
}
