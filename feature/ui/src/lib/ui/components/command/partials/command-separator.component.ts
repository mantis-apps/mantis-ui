import { Component } from '@angular/core';
import  { BrnCommandSeparatorComponent } from '@spartan-ng/ui-command-brain';
import { HlmCommandSeparatorDirective } from '@spartan-ng/ui-command-helm';

@Component({
  selector: 'CommandSeparator',
  standalone: true,
  imports: [
    BrnCommandSeparatorComponent,
    HlmCommandSeparatorDirective,
  ],
  template: `
    <brn-cmd-separator hlm></brn-cmd-separator>
  `,
})
export class CommandSeparatorComponent {}
