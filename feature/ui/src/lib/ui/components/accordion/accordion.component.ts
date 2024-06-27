import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BrnAccordionContentComponent } from '@spartan-ng/ui-accordion-brain';
import {
  HlmAccordionContentDirective,
  HlmAccordionDirective,
  HlmAccordionIconDirective,
  HlmAccordionItemDirective,
  HlmAccordionTriggerDirective,
} from '@spartan-ng/ui-accordion-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';

export interface AccordionItem {
  triggerText: string;
  content: string;
}

@Component({
	selector: 'Accordion',
	standalone: true,
	imports: [
		BrnAccordionContentComponent,
		HlmAccordionDirective,
		HlmAccordionItemDirective,
		HlmAccordionTriggerDirective,
		HlmAccordionContentDirective,
		HlmAccordionIconDirective,
		HlmIconComponent,
    NgIf,
    NgFor,
	],
	template: `
    @if (items.length > 0) {
		<div hlmAccordion [class]="class">
      @for (item of items; track item.triggerText) {
        <div hlmAccordionItem>
          <button hlmAccordionTrigger>
            {{ item.triggerText }}
            <hlm-icon hlmAccIcon />
          </button>
          <brn-accordion-content hlm>
            {{ item.content }}
          </brn-accordion-content>
        </div>
      }
		</div>
    } @else {
      <p>Accordion has no items to display</p>
    }
	`,
})
export class AccordionComponent {
  @Input() class = '';
  @Input({required: true}) items!: AccordionItem[];
}
