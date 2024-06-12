
import { Component, Input } from '@angular/core';
import {
  BrnCommandImports
} from '@spartan-ng/ui-command-brain';
import { HlmCommandImports } from '@spartan-ng/ui-command-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { provideIcons } from '@ng-icons/core';
import {
  lucideCalendar,
  lucideWallet,
  lucideSmile,
  lucideCog,
  lucideSearch,
  lucideUser,
  lucidePlus,
} from '@ng-icons/lucide';

import { CommandInputComponent } from './partials/command-input/command-input.component';
import { CommandListComponent } from './partials/command-input/command-list.component';

@Component({
  selector: 'Command',
  standalone: true,
  imports: [
    BrnCommandImports,
    HlmCommandImports,
    HlmIconComponent,
    IconComponent,
    HlmButtonDirective,
    ButtonComponent,
    CommandInputComponent,
    CommandListComponent
  ],
  providers: [
    provideIcons({ lucideSearch, lucideCalendar, lucideSmile, lucidePlus, lucideUser, lucideWallet, lucideCog }),
  ],
  template: `
    <brn-cmd [class]="class" hlm>
      <CommandInput [commandInputPlaceholder]="'Filter commands'" />
      <div *brnCmdEmpty hlmCmdEmpty>{{commandEmptyText}}</div>
      <CommandList>
        <brn-cmd-group hlm label="Suggestions">
          <button brnCmdItem hlm>
            <hlm-icon name="lucideCalendar" hlmCmdIcon />
            Calendar
          </button>
          <button brnCmdItem hlm>
            <hlm-icon name="lucideSmile" hlmCmdIcon />
            Search Emoji
          </button>
          <button brnCmdItem hlm>
            <hlm-icon name="lucidePlus" hlmCmdIcon />
            Calculator
          </button>
        </brn-cmd-group>
        <brn-cmd-separator hlm></brn-cmd-separator>
        <brn-cmd-group hlm label="Settings">
          <button brnCmdItem hlm>
            <hlm-icon name="lucideUser" hlmCmdIcon />
            Profile
            <hlm-cmd-shortcut>⌘P</hlm-cmd-shortcut>
          </button>
          <button brnCmdItem hlm>
            <hlm-icon name="lucideWallet" hlmCmdIcon />
            Billing
            <hlm-cmd-shortcut>⌘B</hlm-cmd-shortcut>
          </button>
          <button brnCmdItem hlm>
            <hlm-icon name="lucideCog" hlmCmdIcon />
            Settings
            <hlm-cmd-shortcut>⌘S</hlm-cmd-shortcut>
          </button>
        </brn-cmd-group>
      </CommandList>
    </brn-cmd>
  `,
})
export class CommandComponent {
  /**
   * import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command"
   */

  @Input() class = '';
  @Input() commandEmptyText = 'No results found';
}
