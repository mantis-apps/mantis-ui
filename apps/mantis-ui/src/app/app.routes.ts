import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { DashboardPage } from './dashboard.page';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        component: DashboardPage
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'demo-dashboard',
        loadComponent: () => import('./demo-dashboard.page').then((m) =>
          m.DemoDashboardPage),
      },
      {
        path: 'demo-charts',
        loadComponent: () => import('./demo-charts.page').then((m) =>
          m.DemoChartsPageComponent),
      }
    ]
  }
];
