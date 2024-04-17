
import { Component, Input } from '@angular/core';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';

@Component({
  selector: 'mantis-button',
  standalone: true,
  imports: [HlmButtonDirective],
  template: `
  <button hlmBtn [variant]="variant" [size]="size">
    <ng-content></ng-content>
  </button> `,
})
export class ButtonComponent {
  @Input() variant: 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link' | 'default' = 'default';
  @Input() size: 'default' | 'sm' | 'lg' | 'icon' = 'default';

}
