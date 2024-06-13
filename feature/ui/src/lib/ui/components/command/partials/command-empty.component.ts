import { Component, Input, ViewEncapsulation } from '@angular/core';
import  { BrnCommandEmptyDirective } from '@spartan-ng/ui-command-brain';
import { HlmCommandEmptyDirective } from '@spartan-ng/ui-command-helm';

@Component({
  selector: 'CommandEmpty',
  standalone: true,
  imports: [
    BrnCommandEmptyDirective,
    HlmCommandEmptyDirective,
  ],
  template: `
    <div *brnCmdEmpty hlmCmdEmpty>{{commandEmptyText}}</div>
  `,
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ]

})
export class CommandEmptyComponent {
  @Input() commandEmptyText = 'No items found';
}
