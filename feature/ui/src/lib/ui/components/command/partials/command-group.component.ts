import { Component, Input } from '@angular/core';
import  { BrnCommandGroupComponent } from '@spartan-ng/ui-command-brain';
import { HlmCommandGroupDirective } from '@spartan-ng/ui-command-helm';

@Component({
  selector: 'CommandGroup',
  standalone: true,
  imports: [
    BrnCommandGroupComponent,
    HlmCommandGroupDirective,
  ],
  template: `
    <brn-cmd-group hlm [label]="commandGroupLabel">
      <ng-content />
    </brn-cmd-group>
  `,
})
export class CommandGroupComponent {
  @Input({ required: true }) commandGroupLabel!: string;
}
