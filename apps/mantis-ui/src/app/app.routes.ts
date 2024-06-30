import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: 'home',
        loadComponent: () => import('./dashboard.page').then((m) =>
          m.DashboardPage),
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
