
import { Component, Input } from '@angular/core';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';

export type square = "1 / 1";
export type portrait = "9 / 16";
export type landscape = "16 / 9";

@Component({
  selector: 'AspectRatio',
  standalone: true,
  imports: [HlmAspectRatioDirective],
  template: `
    <div class="overflow-hidden rounded-xl drop-shadow">
      <div [hlmAspectRatio]="ratio">
        <ng-content />
      </div>
    </div>
  `,
  styles: [
    `
    :host {
      display: contents;
    }
    `

  ]
})
export class AspectRatioComponent {
  @Input({required: true}) ratio: square | portrait | landscape = "1 / 1"
}
