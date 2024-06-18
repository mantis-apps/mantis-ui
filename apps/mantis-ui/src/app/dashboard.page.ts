/* eslint-disable @angular-eslint/component-class-suffix */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import {
  IconComponent,
  ButtonComponent,
  IconListComponent,
  CardModule,
  AlertDialogComponent,
  AlertComponent,
  AspectRatioComponent,
  AvatarComponent,
  AccordionComponent,
  BadgeComponent,
  CarouselComponent,
  CheckboxComponent,
  CollapsibleComponent,
  CommandComponent,
  CommandDialogComponent,
  CommandData,
  HoverCardComponent
} from '@mantistech/ui';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { provideIcons } from '@ng-icons/core';
import { lucideMail, lucideMoon, lucideSearch, lucideCalendar, lucideSmile, lucidePlus, lucideUser, lucideWallet, lucideCog } from '@ng-icons/lucide';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [
    provideIcons({
      lucideMail,
      lucideMoon,
      lucideSearch,
      lucideCalendar,
      lucideSmile,
      lucidePlus,
      lucideUser,
      lucideWallet,
      lucideCog
     })
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonComponent,
    IconComponent,
    IconListComponent,
    CardModule,
    AvatarComponent,
    AccordionComponent,
    HlmAspectRatioDirective,
    AlertComponent,
    AlertDialogComponent,
    AspectRatioComponent,
    AvatarComponent,
    BadgeComponent,
    CarouselComponent,
    CheckboxComponent,
    CollapsibleComponent,
    CommandComponent,
    CommandDialogComponent,
    HoverCardComponent
  ],
  templateUrl: './dashboard.page.html',
  styles: ``,
})
export class DashboardPage {

  protected accordionItems = [
    {
      triggerText: 'Is it accessible?',
      content: `Yes. It adheres to the WAI-ARIA design pattern.`,
    },
    {
      triggerText: 'Is it styled?',
      content: `Yes. It comes with default styles that match the other components' aesthetics.`,
    },
    {
      triggerText: 'Is it animated?',
      content: `Yes. It's animated by default, but you can disable it if you prefer.`,
    },
  ];

  protected commandData: CommandData = {
    commandInputPlaceholder: 'Type a command or search...',
    commandEmptyText: 'No results found.',
    commandGroups: [
      {
        commandGroupLabel: 'Suggestions',
        commandItems: [
          {
            commandItemLabel: 'Calendar',
            commandItemSlug: 'calendar',
            commandItemIcon: 'lucideCalendar',
          },
          {
            commandItemLabel: 'Search Emoji',
            commandItemSlug: 'search-emoji',
            commandItemIcon: 'lucideSmile',
          },
          {
            commandItemLabel: 'Calculator',
            commandItemSlug: 'calculator',
            commandItemIcon: 'lucidePlus',
          },
        ],
      },
      {
        commandGroupLabel: 'Settings',
        commandItems: [
          {
            commandItemLabel: 'Profile',
            commandItemSlug: 'profile',
            commandItemIcon: 'lucideUser',
            commandItemShortcut: '⌘P',
          },
          {
            commandItemLabel: 'Billing',
            commandItemSlug: 'billing',
            commandItemIcon: 'lucideWallet',
            commandItemShortcut: '⌘B',
          },
          {
            commandItemLabel: 'Settings',
            commandItemSlug: 'settings',
            commandItemIcon: 'lucideCog',
            commandItemShortcut: '⌘S',
          },
        ],
      },
    ]
  };

  showAlert(event: {value: string}) {
    alert(event.value);
  }

  setCommand(event: string) {
    alert(`Command selected: ${event}`);
  }

}
