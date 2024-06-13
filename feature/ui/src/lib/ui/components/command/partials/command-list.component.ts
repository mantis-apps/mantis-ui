import { Component, ViewEncapsulation } from '@angular/core';
import  { BrnCommandListComponent } from '@spartan-ng/ui-command-brain';
import { HlmCommandListDirective } from '@spartan-ng/ui-command-helm';

@Component({
  selector: 'CommandList',
  standalone: true,
  imports: [
    BrnCommandListComponent,
    HlmCommandListDirective,
  ],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: `
    <brn-cmd-list hlm>
      <ng-content />
    </brn-cmd-list>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class CommandListComponent {}
