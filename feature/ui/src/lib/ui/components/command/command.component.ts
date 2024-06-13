import { CommandGroupComponent } from './partials/command-group.component';

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

import { CommandInputComponent } from './partials/command-input.component';
import { CommandListComponent } from './partials/command-list.component';
import { CommandItemComponent } from './partials/command-item.component';
import { CommandSeparatorComponent } from './partials/command-separator.component';

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
    CommandListComponent,
    CommandGroupComponent,
    CommandItemComponent,
    CommandSeparatorComponent
  ],
  providers: [
    provideIcons({ lucideSearch, lucideCalendar, lucideSmile, lucidePlus, lucideUser, lucideWallet, lucideCog }),
  ],
  template: `
    <brn-cmd [class]="class" hlm>
      <CommandInput [commandInputPlaceholder]="'Filter commands'" />
      <div *brnCmdEmpty hlmCmdEmpty>{{commandEmptyText}}</div>
      <CommandList>
        <CommandGroup commandGroupLabel="Applications">
          <CommandItem commandItemLabel="Calendar" commandItemIcon="lucideCalendar" />
          <CommandItem commandItemLabel="Search Emoji" commandItemIcon="lucideSmile" />
          <CommandItem commandItemLabel="Calculator" commandItemIcon="lucidePlus" />
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup commandGroupLabel="Settings">
          <CommandItem commandItemLabel="Profile" commandItemIcon="lucideUser" commandItemShortcut="⌘P" />
          <CommandItem commandItemLabel="Billing" commandItemIcon="lucideWallet" commandItemShortcut="⌘B" />
          <CommandItem commandItemLabel="Settings" commandItemIcon="lucideCog" commandItemShortcut="⌘S" />
        </CommandGroup>
      </CommandList>
    </brn-cmd>
  `,
})
export class CommandComponent {
  @Input() class = '';
  @Input() commandEmptyText = 'No results found';
}
