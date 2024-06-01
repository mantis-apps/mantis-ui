
import { Component, Input, inject } from '@angular/core';
import { HlmIconComponent, IconSize } from '@spartan-ng/ui-icon-helm';
import { provideIcons, IconName } from '@ng-icons/core';
import { lucideMail, lucideUser2, lucideUsers2, lucideActivity, lucideTruck, lucideTrain } from '@ng-icons/lucide';
import { ICONS } from './icon.token';

@Component({
  selector: 'mantis-icon',
  standalone: true,
  imports: [HlmIconComponent],
  providers: [
    {
      provide: ICONS,
      useValue: {
        lucideMail: 'lucideMail',
        lucideUser2: 'lucideUser2',
        lucideUsers2: 'lucideUsers2',
      }
    },
    provideIcons({
      lucideMail,
      lucideUser2,
      lucideUsers2,
      lucideActivity,
      lucideTruck,
      lucideTrain,
    }),
  ],
  template: `
    <hlm-icon
      [name]="name"
      [size]="size"
      [color]="color"
      [strokeWidth]="strokeWidth"
      [class]="class"></hlm-icon>
  `,
})
export class IconComponent {
  private icons: Record<string, IconName> = inject(ICONS);
  @Input({ required: true }) name!: IconName; // Required
  @Input() size: IconSize = 'none';
  @Input() color?: string;
  @Input() strokeWidth?: string | number;
  @Input() class?: string;
}

// import { Component, Input, OnInit } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { HlmIconComponent } from '@spartan-ng/ui-icon-helm';
// import { provideIcons, IconName } from '@ng-icons/core';
// import * as lucideIcons from '@ng-icons/lucide';

// @Component({
//   selector: 'mantis-icon',
//   standalone: true,
//   imports: [CommonModule, HlmIconComponent],
//   template: `
//     <hlm-icon
//       *ngIf="icon"
//       [size]="size"
//       [color]="color"
//       [strokeWidth]="strokeWidth"
//       [name]="iconName"
//     >
//     </hlm-icon>
//   `,
// })
// export class IconComponent implements OnInit {
//   @Input() iconName!: string;
//   @Input() size: 'xs' | 'sm' | 'base' | 'lg' | 'xl' | 'none' = 'base';
//   @Input() color: string | undefined = undefined;
//   @Input() strokeWidth: string | number | undefined = undefined;

//   icon: typeof lucideIcons[keyof typeof lucideIcons] | undefined;

//   async ngOnInit() {
//     if (this.iconName) {
//       this.icon = lucideIcons[this.iconName as keyof typeof lucideIcons];
//       provideIcons({ [this.iconName]: this.icon });
//     }
//   }
// }
