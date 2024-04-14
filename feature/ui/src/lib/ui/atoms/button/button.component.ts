import { Component } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'mantis-button',
  standalone: true,
  imports: [HlmButtonDirective],
  template: ` <button hlmBtn>
    <ng-content></ng-content>
  </button> `,
})
export class ButtonComponent { }
