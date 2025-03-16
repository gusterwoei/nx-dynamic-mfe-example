import { loadRemoteModule } from '@nx/angular/mf';
import { Route } from '@angular/router';
import { HomeComponent } from '../home.component';

export const appRoutes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    // loadChildren: () => import('about/Routes').then((m) => m?.remoteRoutes),
    loadChildren: () => loadRemoteModule('about', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'cart',
    // loadChildren: () => import('cart/Routes').then((m) => m?.remoteRoutes),
    loadChildren: () => loadRemoteModule('cart', './Routes').then((m) => m.remoteRoutes),
  },
  {
    path: 'shop',
    // loadChildren: () => import('shop/Routes').then((m) => m?.remoteRoutes),
    loadChildren: () => loadRemoteModule('shop', './Routes').then((m) => m.remoteRoutes),
  },
];
