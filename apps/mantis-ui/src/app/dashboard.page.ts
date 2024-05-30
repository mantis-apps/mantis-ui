/* eslint-disable @angular-eslint/component-class-suffix */
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent, ButtonComponent, InfoCardComponent, IconListComponent, CardComponent } from '@mantistech/ui';
import { HlmAspectRatioDirective } from '@spartan-ng/ui-aspectratio-helm';
import { provideIcons, IconName } from '@ng-icons/core';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    IconComponent,
    ButtonComponent,
    InfoCardComponent,
    IconListComponent,
    CardComponent,
    HlmAspectRatioDirective,
  ],
  templateUrl: './dashboard.page.html',
  styles: ``,
})
export class DashboardPage { }
