
import { Component } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideCalendar } from '@ng-icons/lucide';
import { HlmAvatarModule } from '@spartan-ng/ui-avatar-helm';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BrnHoverCardModule } from '@spartan-ng/ui-hovercard-brain';
import { HlmHoverCardModule } from '@spartan-ng/ui-hovercard-helm';
import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
import { ButtonComponent } from '../button/button.component';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'HoverCard',
  standalone: true,
  imports: [BrnHoverCardModule, HlmHoverCardModule, HlmButtonDirective, HlmIconComponent, HlmAvatarModule, ButtonComponent, IconComponent],
  providers: [provideIcons({ lucideCalendar })],
  template: `
    <brn-hover-card>
      <div brnHoverCardTrigger>
        <ng-content select="[hoverTrigger]"></ng-content>
      </div>
      <hlm-hover-card-content *brnHoverCardContent class="w-80">
        <ng-content select="[hoverContent]"></ng-content>
      </hlm-hover-card-content>
    </brn-hover-card>
  `,
})
export class HoverCardComponent {}
