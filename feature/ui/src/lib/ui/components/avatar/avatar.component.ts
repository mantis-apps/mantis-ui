
import { Component, Input } from '@angular/core';
import { HlmAvatarComponent, HlmAvatarFallbackDirective, HlmAvatarImageDirective } from '@spartan-ng/ui-avatar-helm';

@Component({
  selector: 'Avatar',
  standalone: true,
  imports: [HlmAvatarImageDirective, HlmAvatarComponent, HlmAvatarFallbackDirective],
  template: `
    <hlm-avatar [variant]="variant">
      <img src="{{imgSrc}}" alt="{{imgAltText}}" hlmAvatarImage />
      <span class="bg-[{{fallbackBgColor}}] text-white" hlmAvatarFallback>{{fallbackText}}</span>
    </hlm-avatar>
  `,
})
export class AvatarComponent {
  @Input() variant: 'small' | 'medium' | 'large' = 'small';
  @Input({required: true}) imgSrc = '';
  @Input() imgAltText = 'avatar image description'
  @Input() fallbackText = 'MU';
  @Input() fallbackBgColor = '#FD005B';
}

