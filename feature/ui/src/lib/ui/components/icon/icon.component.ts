
import { Component, Input, signal } from '@angular/core';
import { HlmIconComponent, IconSize } from '@spartan-ng/ui-icon-helm';
import { provideIcons, IconName } from '@ng-icons/core';
import { lucideShieldQuestion } from '@ng-icons/lucide';

@Component({
  selector: 'Icon',
  standalone: true,
  imports: [HlmIconComponent],
  providers: [
    provideIcons({
      lucideShieldQuestion
    }),
  ],
  template: `
    <hlm-icon
      [name]="name"
      [size]="size"
      [color]="color"
      [strokeWidth]="strokeWidth ? strokeWidth() : undefined"
      [class]="class"></hlm-icon>
  `,
})
export class IconComponent {
  @Input({ required: true }) name: IconName = 'lucideShieldQuestion';
  @Input() size: IconSize = 'none';
  @Input() color?: string;
  @Input() strokeWidth? = signal<string| number | undefined >(undefined);
  @Input() class?: string;
}

