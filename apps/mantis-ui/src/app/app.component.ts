import { lucideMailbox, lucideArchive, lucideActivity } from '@ng-icons/lucide';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  IconComponent,
  ButtonComponent,
  InfoCardComponent,
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
    InfoCardComponent,
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
    <!-- <div class="container mx-auto">
      <h1 class="text-4xl font-bold text-center">Welcome to Mantis UI</h1>
      <div class="mt-4 flex p-8 justify-center space-x-4">
        <mantis-icon [name]="'lucideUser2'" size="lg" />
        <mantis-icon [name]="'lucideMailbox'" size="lg" />
        <mantis-icon [name]="'lucideArchive'" size="lg" />
        <mantis-icon [name]="'lucideActivity'" size="lg" />
      </div>

      <div class="mt-4 flex xs:flex-col xs:gap-2 sm:flex-row sm:p-2 md:p-4 lg:p-8 justify-center space-x-4 ">
        <mantis-button variant="default" class="flex justify-center items-center">
          <mantis-icon [name]="'lucideUser2'" size="sm" class="flex mr-1" />
          <span>User Account</span>
        </mantis-button>

        <mantis-button variant="secondary" class="flex justify-center items-center">
          <mantis-icon [name]="'lucideMailbox'" size="sm" class="flex mr-1" />
          <span>Login with Email</span>
        </mantis-button>

        <mantis-button variant="destructive" class="flex justify-center items-center">
          <mantis-icon [name]="'lucideArchive'" size="sm" class="flex mr-1" />
          <span>Delete Account</span>
        </mantis-button>

        <mantis-button variant="ghost" class="flex justify-center items-center" size="icon">
          <mantis-icon [name]="'lucideActivity'" size="sm" class="flex" />
          <span class="sr-only">User Account</span>
        </mantis-button>
      </div>

      <div class="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 py-8 space-x-4">
        <mantis-info-card
          title="User Account"
          description="Marley was dead: to begin with. There is no doubt whatever about that. The register of his burial was signed by the clergyman, the clerk, the undertaker, and the chief mourner."
          class="sm:col-span-2"
          headerClass="py-4"
          titleClass="lg:text-3xl font-bold text-balance"
          descriptionClass="text-sm max-w-xl leading-relaxed text-balance"
        >
          <mantis-button variant="default" class="flex justify-start content-center pl-6 pb-4">
            <mantis-icon [name]="'lucideUser2'" size="sm" class="flex mr-1" />
            <span>User Account</span>
          </mantis-button>
        </mantis-info-card>
        <mantis-info-card title="User Account" description="This is a user account card"/>
        <mantis-info-card title="User Account" description="This is a user account card"/>
      </div>

      <mantis-card
        class="mb-8"
        titleClass="text-3xl xs:text-lg sm:text-2xl md:text-4xl lg:text-5xl font-bold text-balance"
      >
        <ng-container CardBadge>
          100+
        </ng-container>
        <ng-container CardTitle>
          Down the Rabbit Hole
        </ng-container>
        <ng-container CardDescription>
          Alice in Wonderland <small> -- by Lewis Carroll </small>
        </ng-container>
        <ng-container CardContent>
          Alice was beginning to get very tired of sitting by her sister on the bank, and of having nothing to do: once or twice
          she had peeped into the book her sister was reading, but it had no pictures or conversations in it, and what is the use of a book,
          thought Alice without pictures or conversations?
        </ng-container>
        <ng-container CardFooter>
          <mantis-button variant="default" size="lg" class="flex justify-start content-center pl-0 pb-4">
            <mantis-icon [name]="'lucideMail'" size="sm" class="flex mr-1" />
            <p>Subscribe <span class="xs:hidden sm:inline">to Newsletter</span></p>
          </mantis-button>
        </ng-container>
      </mantis-card>

      <mantis-icon-list></mantis-icon-list>
    </div> -->

    <app-dashboard />
  `,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'mantis-ui';
}
