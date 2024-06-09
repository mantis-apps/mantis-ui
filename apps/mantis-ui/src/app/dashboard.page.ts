/* eslint-disable @angular-eslint/component-class-suffix */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header.component';

import {
  IconComponent,
  ButtonComponent,
  IconListComponent,
  CardModule,
  AccordionModule,
  AlertDialogComponent,
  AlertComponent,
  AspectRatioComponent,
  AvatarComponent
} from '@mantistech/ui';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { provideIcons, IconName } from '@ng-icons/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ButtonComponent,
    IconComponent,
    IconListComponent,
    CardModule,
    AccordionModule,
    HlmAspectRatioDirective,
    AlertComponent,
    AlertDialogComponent,
    AspectRatioComponent,
    AvatarComponent
  ],
  templateUrl: './dashboard.page.html',
  styles: ``,
})
export class DashboardPage {
  showAlert(event: {value: string}) {
    alert(event.value);
  }
}
