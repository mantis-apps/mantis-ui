import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon.component';
import { ButtonComponent } from '../../button/button.component';
import { provideIcons, IconName } from '@ng-icons/core';
import {
  lucideMail,
  lucideUser2,
  lucideActivity,
  lucideAccessibility,
  lucideBackpack,
  lucideApple,
  lucideAlarmCheck,
  lucideAlarmClock,
  lucideTrain,
  lucideTrash,
  lucideTornado,
  lucideTruck,
  lucideTv,
  lucideTrophy,
  lucidePlane,
  lucideShield,
  lucideShip,
  lucideShoppingCart,
  lucideShoppingBag,
  lucideSettings,
  lucideSearch,
  lucideScissors,
  lucideBarChart,
  lucideBattery,
  lucideDatabase,
  lucideCloud,
  lucideCamera,
  lucideCalendar,
  lucideBook,
  lucideBell,
  lucideLasso,
  lucideTicket,
  lucideThumbsUp,
  lucideTrees,
  lucideWrench
} from '@ng-icons/lucide';

@Component({
  selector: 'IconList',
  standalone: true,
  imports: [CommonModule, ButtonComponent, IconComponent],
  providers: [
    provideIcons({
      lucideMail,
      lucideUser2,
      lucideActivity,
      lucideAccessibility,
      lucideBackpack,
      lucideApple,
      lucideAlarmCheck,
      lucideAlarmClock,
      lucideTrain,
      lucideTrash,
      lucideTornado,
      lucideTruck,
      lucideTv,
      lucideTrophy,
      lucidePlane,
      lucideShield,
      lucideShip,
      lucideShoppingCart,
      lucideShoppingBag,
      lucideSettings,
      lucideSearch,
      lucideScissors,
      lucideBarChart,
      lucideBattery,
      lucideDatabase,
      lucideCloud,
      lucideCamera,
      lucideCalendar,
      lucideBook,
      lucideBell,
      lucideLasso,
      lucideTicket,
      lucideThumbsUp,
      lucideTrees,
      lucideWrench
    }),
  ],
  template: `
    <div class="grid grid-cols-7 gap-4 max-w-lg mx-auto mb-4">
      <Button *ngFor="let icon of icons" variant="outline" class="flex justify-center items-center" size="icon">
        <Icon [name]="icon" size="sm" class="flex" />
        <span class="sr-only">{{ icon }}</span>
      </Button>
    </div>
  `,
  styles: []
})
export class IconListComponent {
  icons: IconName[] = [
    'lucideMail',
    'lucideUser2',
    'lucideActivity',
    'lucideAccessibility',
    'lucideBackpack',
    'lucideApple',
    'lucideAlarmCheck',
    'lucideAlarmClock',
    'lucideTrain',
    'lucideTrash',
    'lucideTornado',
    'lucideTruck',
    'lucideTv',
    'lucideTrophy',
    'lucidePlane',
    'lucideShield',
    'lucideShip',
    'lucideShoppingCart',
    'lucideShoppingBag',
    'lucideSettings',
    'lucideSearch',
    'lucideScissors',
    'lucideBarChart',
    'lucideBattery',
    'lucideDatabase',
    'lucideCloud',
    'lucideCamera',
    'lucideCalendar',
    'lucideBook',
    'lucideBell',
    'lucideLasso',
    'lucideTicket',
    'lucideThumbsUp',
    'lucideTrees',
    'lucideWrench'
  ];
}
