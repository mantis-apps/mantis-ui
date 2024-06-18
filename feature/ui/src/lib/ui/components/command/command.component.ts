import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
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
  lucideSearch,
} from '@ng-icons/lucide';

import { CommandData } from './command.models';

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
    NgIf,
    NgFor,
  ],
  providers: [
    provideIcons({ lucideSearch }),
  ],
  template: `
    @if( commandData ) {
        <brn-cmd [class]="class">
        <!-- input wrapper -->
        <hlm-cmd-input-wrapper>
          <hlm-icon name="lucideSearch" />
          <input placeholder="{{ commandData.commandInputPlaceholder }}" brnCmdInput hlm />
        </hlm-cmd-input-wrapper>
        <!-- command empty -->
        <div *brnCmdEmpty hlmCmdEmpty>{{ commandData.commandEmptyText }}</div>
        <!-- command list -->
        <brn-cmd-list hlm>
          <!-- command groups -->
          @if( commandData.commandGroups ) {
            @for (group of commandData.commandGroups; track group.commandGroupLabel; let last = $last) {
              <brn-cmd-group hlm [label]="group.commandGroupLabel" class="w-full">
                <!-- command items -->
                @for (item of group.commandItems; track item.commandItemLabel) {
                  <button brnCmdItem hlm class="w-full" (selected)="commandItemClicked(item?.commandItemSlug || item.commandItemLabel)" >
                    <hlm-icon [name]="item.commandItemIcon" hlmCmdIcon />
                    {{ item.commandItemLabel }}
                    @if( item.commandItemShortcut ) {
                      <hlm-cmd-shortcut>{{ item.commandItemShortcut }}</hlm-cmd-shortcut>
                    }
                  </button>
                }
              </brn-cmd-group>
              @if( !last || commandData.commandItems) {
                <brn-cmd-separator hlm />
              }

            }
          }
          <!-- command items -->
          @if( commandData.commandItems ) {
            <div class="p-1">
            @for (item of commandData.commandItems; track item.commandItemLabel) {
              <button brnCmdItem hlm class="w-full" (selected)="commandItemClicked(item?.commandItemSlug || item.commandItemLabel)">
                <hlm-icon [name]="item.commandItemIcon" hlmCmdIcon />
                {{ item.commandItemLabel }}
                @if( item.commandItemShortcut ) {
                  <hlm-cmd-shortcut>{{ item.commandItemShortcut }}</hlm-cmd-shortcut>
                }
              </button>
            }
            </div>
          }
        </brn-cmd-list>
      </brn-cmd>
    }
  `,
})
export class CommandComponent {
  @Input() isInDialog = false;
  @Input() class = '';
  @Input() commandEmptyText = 'No results found';

  @Input({required: true}) commandData!: CommandData;

  @Output() commandSelected = new EventEmitter<string>();

  commandItemClicked(value: string) {
    this.commandSelected.emit(value);
  }

}
