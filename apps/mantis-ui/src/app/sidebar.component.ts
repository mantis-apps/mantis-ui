import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { provideIcons } from '@ng-icons/core';
import { HlmIconComponent } from '@mantistech/spartanui-pack/ui-icon-helm';
import {
  lucideHome,
  lucideShoppingCart,
  lucidePackage,
  lucideUsers2,
  lucideLineChart,
  lucideSettings,
  lucidePackage2,
  lucideBot,
  lucideMessageSquare
} from '@ng-icons/lucide';
import { HlmTooltipComponent, HlmTooltipTriggerDirective } from '@mantistech/spartanui-pack/ui-tooltip-helm';
import { BrnTooltipContentDirective } from '@spartan-ng/ui-tooltip-brain';

@Component({
  selector: 'app-dashboard-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    HlmTooltipComponent,
    HlmTooltipTriggerDirective,
    BrnTooltipContentDirective,
    HlmIconComponent
  ],
  providers: [
    provideIcons({
      lucideHome,
      lucideShoppingCart,
      lucidePackage,
      lucideUsers2,
      lucideLineChart,
      lucideSettings,
      lucidePackage2,
      lucideBot,
      lucideMessageSquare
    })
  ],
  template: `
    <aside class="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-border border-r bg-background sm:flex">
      <nav class="flex flex-col items-center gap-4 px-2 sm:py-5">

        <hlm-tooltip>
          <a
            hlmTooltipTrigger
            routerLink="/home"
            [routerLinkActive]="'bg-primary text-primary-foreground font-semibold rounded-full group-hover:scale-110'"
            class="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground md:h-8 md:w-8 group-hover:scale-110">
            <hlm-icon name="lucideHome" size="sm" class="transition-all group-hover:scale-110"></hlm-icon>
            <span class="sr-only">Dashboard</span>
          </a>
          <span *brnTooltipContent>Dashboard</span>
        </hlm-tooltip>
        <hlm-tooltip>
        <a hlmTooltipTrigger
          routerLink="/demo-dashboard"
          [routerLinkActive]="'bg-primary text-primary-foreground font-semibold rounded-full group-hover:scale-110'"
          class="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 text-lg  md:h-8 md:w-8 md:text-base"
        >
          <hlm-icon name="lucidePackage2" size="sm" class="transition-all group-hover:scale-110"></hlm-icon>
          <span class="sr-only">Acme Inc</span>
        </a>
        </hlm-tooltip>
        <hlm-tooltip>
          <a hlmTooltipTrigger routerLink="/" class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
            <hlm-icon name="lucideShoppingCart" size="sm"></hlm-icon>
            <span class="sr-only">Orders</span>
          </a>
          <span *brnTooltipContent>Orders</span>
        </hlm-tooltip>
        <hlm-tooltip>
          <a hlmTooltipTrigger routerLink="/" class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
            <hlm-icon name="lucidePackage" size="sm"></hlm-icon>
            <span class="sr-only">Products</span>
          </a>
          <span *brnTooltipContent>Products</span>
        </hlm-tooltip>
        <hlm-tooltip>
          <a hlmTooltipTrigger routerLink="/" class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
            <hlm-icon name="lucideUsers2" size="sm"></hlm-icon>
            <span class="sr-only">Customers</span>
          </a>
          <span *brnTooltipContent>Customers</span>
        </hlm-tooltip>
        <hlm-tooltip>
          <a hlmTooltipTrigger
             routerLink="/"
             routerLink="/demo-charts"
             [routerLinkActive]="'bg-primary text-primary-foreground font-semibold rounded-full group-hover:scale-110'"
             class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
            <hlm-icon name="lucideLineChart" size="sm"></hlm-icon>
            <span class="sr-only">Analytics</span>
          </a>
          <span *brnTooltipContent>Analytics</span>
        </hlm-tooltip>
        <hlm-tooltip>
          <a hlmTooltipTrigger routerLink="/chatbot" [routerLinkActive]="'bg-primary text-primary-foreground font-semibold rounded-full'" class="flex h-9 w-9 items-center justify-center text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
            <hlm-icon name="lucideBot" size="sm" class="transition-all group-hover:scale-110"></hlm-icon>
            <span class="sr-only">Chat</span>
          </a>
          <span *brnTooltipContent>Chat</span>
        </hlm-tooltip>
        </nav>

        <nav class="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <hlm-tooltip>
          <a hlmTooltipTrigger routerLink="/" class="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8">
            <hlm-icon name="lucideSettings" size="sm"></hlm-icon>
            <span class="sr-only">Settings</span>
          </a>
          <span *brnTooltipContent>Settings</span>
        </hlm-tooltip>
      </nav>
      </aside>
  `,
})
export class SidebarComponent { }
