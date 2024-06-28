import { Route } from '@angular/router';
import { ShellComponent } from './shell.component';
import { DashboardPage } from './dashboard.page';

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
      }
    ]
  }
];

// export const appRoutes: Route[] = [
//   {
//     path: '',
//     component: ShellComponent,
//     children: [
//       {
//         path: 'home',
//         loadChildren: () =>
//           import('./home/home.module').then((m) => m.HomePageModule),
//       },
//       {
//         path: 'data-table',
//         loadComponent: () => import('./data-table/data-table.component').then((m) =>
//           m.DataTableComponent),
//       },
//       {
//         path: 'transactions',
//         loadComponent: () => import('./transactions/transactions.component').then((m) =>
//           m.TransactionsComponent),
//       },
//       {
//         path: 'invoice',
//         loadChildren: () =>
//           import('./invoice/invoice.routes').then((m) => m.INVOICE_ROUTES),
//       },
//       {
//         path: 'messages',
//         children: MESSAGES_ROUTES,
//       },

//       {
//         path: '',
//         redirectTo: 'home',
//         pathMatch: 'full',
//       }
//     ]
//   },
//   {
//     path: 'auth',
//     loadComponent: () => import('./auth/auth.component').then((m) => m.AuthComponent),
//   },
// ];
