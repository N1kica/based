import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./home/home.component').then((m) => m.HomeComponent),
  },
  {
    path: 'page',
    loadComponent: () =>
      import('./page/page.component').then((m) => m.PageComponent),
  },
];
