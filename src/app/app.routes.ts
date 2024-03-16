import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/dashboard.component').then(c => c.DashboardComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about.component').then(c => c.AboutComponent)
  }
];
