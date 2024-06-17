
import { Component, ElementRef, Input, signal} from '@angular/core';
import { NgFor } from '@angular/common';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import {
  BrnCollapsibleComponent,
  BrnCollapsibleContentComponent,
  BrnCollapsibleTriggerDirective,
} from '@spartan-ng/ui-collapsible-brain';
import { IconComponent } from '../icon/icon.component';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronsDownUp } from '@ng-icons/lucide';

@Component({
  selector: 'Collapsible',
  standalone: true,
  imports: [
    NgFor,
    BrnCollapsibleComponent,
    BrnCollapsibleTriggerDirective,
    HlmButtonDirective,
    BrnCollapsibleContentComponent,
    IconComponent,
  ],
  providers: [
    provideIcons({
      lucideChevronsDownUp
    }),
  ],
  template: `
    <brn-collapsible [class]="'flex flex-col space-y-2 ' + class">
      <div class="flex items-center justify-between px-4 space-x-4">
        <h4 class="text-sm font-semibold">{{collapsibleTitle}}</h4>
        <button brnCollapsibleTrigger hlmBtn variant="ghost" size="sm" class="p-0 w-9">
          <Icon name="lucideChevronsDownUp" size="sm" class="w-4 h-4" />
          <span class="sr-only">Toggle</span>
        </button>
      </div>
      <div class="px-4 py-3 font-mono text-sm border rounded-md border-border">
        {{collapsibleTriggerText}}
      </div>
      <brn-collapsible-content class="space-y-2">
        @for (c of collapsibleContent; track c.text){
          <div class="px-4 py-3 font-mono text-sm border rounded-md border-border">{{c.text}}</div>
        }
      </brn-collapsible-content>
    </brn-collapsible>
  `,
})
export class CollapsibleComponent {
  @Input() class = '';
  @Input({ required: true}) collapsibleTitle!: string;
  @Input({ required: true}) collapsibleTriggerText!: string;
  @Input({ required: true}) collapsibleContent!: { text: string }[];
  public state = signal<'closed' | 'open'>('closed');
}
