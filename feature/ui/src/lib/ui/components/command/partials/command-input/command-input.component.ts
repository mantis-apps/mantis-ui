import { Component, Input } from '@angular/core';
import  { BrnCommandInputDirective } from '@spartan-ng/ui-command-brain';
import { HlmCommandInputDirective, HlmCommandInputWrapperComponent } from '@spartan-ng/ui-command-helm';
import { IconComponent } from '../../../icon/icon.component';
import { provideIcons } from '@ng-icons/core';
import { lucideSearch } from '@ng-icons/lucide';

@Component({
  selector: 'CommandInput',
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
  template: `
    <hlm-cmd-input-wrapper>
      <Icon name="lucideSearch" />
      <input placeholder="{{commandInputPlaceholder}}" brnCmdInput hlm />
    </hlm-cmd-input-wrapper>
  `,
})
export class CommandInputComponent {
  @Input() commandInputPlaceholder = 'Type a command or search...';
}
