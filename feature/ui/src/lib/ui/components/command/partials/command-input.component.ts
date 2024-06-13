import { Component, Input, ViewEncapsulation } from '@angular/core';
import  { BrnCommandInputDirective } from '@spartan-ng/ui-command-brain';
import { HlmCommandInputDirective, HlmCommandInputWrapperComponent } from '@spartan-ng/ui-command-helm';
import { IconComponent } from '../../icon/icon.component';
import { provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';

@Component({
  selector: 'CommandInput, div[CommandInput]',
  standalone: true,
  imports: [
    BrnCommandInputDirective,
    HlmCommandInputDirective,
    HlmCommandInputWrapperComponent,
    IconComponent,
  ],
  providers: [
    provideIcons({ lucideSearch }),
  ],
  styles: [
    `
      :host {
        display: contents;
      }
    `,
  ],
  template: `
    <hlm-cmd-input-wrapper>
      <Icon name="lucideSearch" />
      <input placeholder="{{commandInputPlaceholder}}" brnCmdInput hlm />
    </hlm-cmd-input-wrapper>
  `,
  encapsulation: ViewEncapsulation.None,
})
export class CommandInputComponent {
  @Input() commandInputPlaceholder = 'Type a command or search...';
}
