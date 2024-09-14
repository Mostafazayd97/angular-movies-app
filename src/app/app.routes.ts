import {Routes} from '@angular/router';

export const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)},
  {path: 'test', loadComponent: () => (import('./pages/test-page/test-page.component').then(m => m.TestPageComponent))}


];
