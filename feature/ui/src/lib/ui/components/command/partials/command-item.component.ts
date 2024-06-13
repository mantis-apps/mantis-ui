import { Component, Input } from '@angular/core';
import { NgIf } from '@angular/common';
import { BrnCommandItemDirective } from '@spartan-ng/ui-command-brain';
import { HlmCommandItemDirective, HlmCommandShortcutComponent, HlmCommandItemIconDirective } from '@spartan-ng/ui-command-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { ButtonComponent } from '../../button/button.component';
import { IconComponent } from '../../icon/icon.component';
import { provideIcons, IconName } from '@ng-icons/core';
import { lucideTerminal } from '@ng-icons/lucide';

@Component({
  selector: 'CommandItem',
  standalone: true,
  imports: [
    BrnCommandItemDirective,
    HlmCommandItemDirective,
    HlmCommandItemIconDirective,
    HlmCommandShortcutComponent,
    HlmIconComponent,
    ButtonComponent,
    IconComponent,
  ],
  providers: [
    provideIcons({
      lucideTerminal
    }),
  ],
  template: `
    <button brnCmdItem hlm class="flex w-full">
      <hlm-icon [name]="commandItemIcon" hlmCmdIcon />
      {{commandItemLabel}}
      @if (commandItemShortcut){
        <hlm-cmd-shortcut>{{commandItemShortcut}}</hlm-cmd-shortcut>
      }
    </button>
  `,
})
export class CommandItemComponent {
  @Input({ required: true }) commandItemLabel!: string;
  @Input() commandItemIcon: IconName = 'lucideTerminal';
  @Input() commandItemShortcut?: string = '';
}
