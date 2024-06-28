import { lucideMailbox, lucideArchive, lucideActivity } from '@ng-icons/lucide';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  IconComponent,
  ButtonComponent,
  IconListComponent,
  CardComponent
} from '@mantistech/ui';

import { DashboardPage } from './dashboard.page';
import { provideIcons } from '@ng-icons/core';



@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    IconComponent,
    ButtonComponent,
    IconListComponent,
    CardComponent,
    DashboardPage
  ],
  selector: 'app-root',
  providers: [
    provideIcons({
      lucideMailbox,
      lucideArchive,
      lucideActivity
    }),
  ],
  template: `
    <router-outlet></router-outlet>
    <!-- <app-dashboard /> -->
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mantis-ui';
}
