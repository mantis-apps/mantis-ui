import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header.component';
import { SidebarComponent } from './sidebar.component';

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: 'AppShell',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    SidebarComponent,
    RouterOutlet],
  template: `
  <main class="w-full min-h-screen p-0 bg-background text-foreground">
  <div class="flex flex-col w-full h-full min-h-screen bg-muted/40">
    <app-dashboard-sidebar class="sm:hidden md:block"></app-dashboard-sidebar>
    <div class="flex flex-col h-full min-h-screen sm:gap-4 sm:py-4 sm:pl-14">
      <AppHeader />
      <main class="items-start flex-1 px-0 py-4 sm:px-6 sm:py-0 md:px-0">
        <router-outlet></router-outlet>
      </main>

  `,
  styles: ``,
})
export class ShellComponent {}
