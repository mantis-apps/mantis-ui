import { Component } from '@angular/core';
import  { BrnCommandListComponent } from '@spartan-ng/ui-command-brain';
import { HlmCommandListDirective } from '@spartan-ng/ui-command-helm';

@Component({
  selector: 'CommandList',
  standalone: true,
  imports: [
    BrnCommandListComponent,
    HlmCommandListDirective,
  ],
  template: `
    <brn-cmd-list hlm>
      <ng-content />
    </brn-cmd-list>
  `,
})
export class CommandListComponent {}
