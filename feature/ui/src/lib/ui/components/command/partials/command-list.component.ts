import { Component, ViewEncapsulation, Input, Output, EventEmitter } from '@angular/core';
import { CmdkService } from '@ngxpert/cmdk';
import {
  BrnCommandComponent,
  BrnCommandImports
} from '@spartan-ng/ui-command-brain';
import { HlmCommandImports } from '@spartan-ng/ui-command-helm';
import { HlmCommandListDirective } from '@spartan-ng/ui-command-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { provideIcons } from '@ng-icons/core';
import {
  lucideSearch,
} from '@ng-icons/lucide';
import { CommandListData } from '../command.models';

@Component({
  selector: 'CommandList',
  standalone: true,
  imports: [
    BrnCommandImports,
    HlmCommandImports,
    HlmCommandListDirective,
    HlmIconComponent
  ],
  providers: [
    provideIcons({ lucideSearch }),
    CmdkService
  ],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: `
    <!-- input wrapper -->
    <brn-cmd >
    <hlm-cmd-input-wrapper>
      <hlm-icon name="lucideSearch" />
      <input placeholder="{{ commandListData.commandInputPlaceholder }}" brnCmdInput hlm />
    </hlm-cmd-input-wrapper>
    <!-- command empty -->
    <div *brnCmdEmpty hlmCmdEmpty>{{ commandListData.commandEmptyText }}</div>
    <!-- command list -->
    <brn-cmd-list hlm>
          <!-- command groups -->
          @if( commandListData.commandGroups ) {
            @for (group of commandListData.commandGroups; track group.commandGroupLabel; let last = $last) {
              <brn-cmd-group hlm [label]="group.commandGroupLabel" class="w-full">
                <!-- command items -->
                @for (item of group.commandItems; track item.commandItemLabel) {
                  <button brnCmdItem hlm class="w-full" (selected)="commandItemClicked(item?.commandItemSlug || item.commandItemLabel)" >
                    <hlm-icon [name]="item.commandItemIcon" hlmCmdIcon />
                    {{ item.commandItemLabel }}??
                    @if( item.commandItemShortcut ) {
                      <hlm-cmd-shortcut>{{ item.commandItemShortcut }}</hlm-cmd-shortcut>
                    }
                  </button>
                }
              </brn-cmd-group>
              @if( !last || commandListData.commandItems) {
                <brn-cmd-separator hlm />
              }

            }
          }
          <!-- command items -->
          @if( commandListData.commandItems ) {
            <div class="p-1">
            @for (item of commandListData.commandItems; track item.commandItemLabel) {
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
  `
})
export class CommandListComponent {
  @Input({required: true}) commandListData!: CommandListData;

  @Output() commandSelected = new EventEmitter<string>();

  commandItemClicked(value: string) {
    this.commandSelected.emit(value);
  }
}
