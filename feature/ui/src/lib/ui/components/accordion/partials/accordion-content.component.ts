import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { HlmAccordionContentDirective, HlmAccordionIconDirective, HlmAccordionTriggerDirective } from '@spartan-ng/ui-accordion-helm';
import { BrnAccordionContentComponent, BrnAccordionDirective, BrnAccordionItemDirective } from '@spartan-ng/ui-accordion-brain';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { ButtonComponent } from '../../button/button.component';

@Component({
  selector: 'AccordionContent',
  standalone: true,
  imports: [
    ButtonComponent,
    HlmAccordionContentDirective,
    BrnAccordionContentComponent,
    HlmAccordionTriggerDirective,
    HlmIconComponent,
    HlmAccordionIconDirective
  ],
  providers: [
    BrnAccordionItemDirective,
    BrnAccordionDirective
  ],
  template: `
    <button hlmAccordionTrigger>
        {{headerLabel}}
        <hlm-icon hlmAccIcon />
    </button>
    <brn-accordion-content hlm>
        <ng-content />
    </brn-accordion-content>
  `,
  styles: `
    :host {
      display: contents;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccordionContentComponent {
  @Input() class = '';
  @Input({ required: true}) headerLabel = 'Accordion Item Header';
}
