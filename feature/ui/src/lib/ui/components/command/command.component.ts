import { CommandGroupComponent } from './partials/command-group.component';
import { CmdkService } from '@ngxpert/cmdk';
import { Component, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import {
  BrnCommandComponent,
  BrnCommandImports
} from '@spartan-ng/ui-command-brain';
import { HlmCommandImports } from '@spartan-ng/ui-command-helm';

// command dialog components and directives should
// be imported dynamically in the future
import {
	BrnDialogCloseDirective,
	BrnDialogComponent,
	BrnDialogContentDirective,
	BrnDialogOverlayComponent,
	BrnDialogTriggerDirective,
} from '@spartan-ng/ui-dialog-brain';
import { HlmDialogOverlayDirective } from '@spartan-ng/ui-dialog-helm';
// end of future dynamic imports

import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { IconComponent } from '../icon/icon.component';
import { ButtonComponent } from '../button/button.component';
import { IconName, provideIcons } from '@ng-icons/core';
import {
  lucideSearch,
} from '@ng-icons/lucide';

import { CommandInputComponent } from './partials/command-input.component';
import { CommandListComponent } from './partials/command-list.component';
import { CommandItemComponent } from './partials/command-item.component';
import { CommandSeparatorComponent } from './partials/command-separator.component';
import { CommandEmptyComponent } from './partials/command-empty.component';

export interface CommandItem {
  commandItemLabel: string;
  commandItemSlug?: string;
  commandItemIcon: IconName;
  commandItemShortcut?: string;
}

export interface CommandGroup {
  commandGroupLabel: string;
  commandItems: CommandItem[];
}

export interface CommandData {
  commandInputPlaceholder: string;
  commandEmptyText: string;
  commandGroups?: CommandGroup[];
  commandItems?: CommandItem[];
}

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
    CommandSeparatorComponent,
    CommandEmptyComponent,
    NgIf,
    NgFor,
  ],
  providers: [
    provideIcons({ lucideSearch }),
    CmdkService
  ],
  template: `
    @if( commandData ) {

        <ng-content></ng-content>

    }
  `,
})
export class CommandComponent {
  @Input() isInDialog = false;
  @Input() class = '';
  @Input() commandEmptyText = 'No results found';

  @Input({required: true}) commandData!: CommandData;


}
