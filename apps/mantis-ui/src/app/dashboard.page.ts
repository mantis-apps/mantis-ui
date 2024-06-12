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
} from '@mantistech/ui';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { provideIcons, IconName } from '@ng-icons/core';
import { lucideMail, lucideMoon } from '@ng-icons/lucide';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  providers: [
    provideIcons({
      lucideMail,
      lucideMoon
     })
  ],
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonComponent,
    IconComponent,
    IconListComponent,
    CardModule,
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
    CommandComponent
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
  showAlert(event: {value: string}) {
    alert(event.value);
  }
}
