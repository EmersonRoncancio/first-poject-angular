import { Routes } from '@angular/router';
import { CountComponent } from './pages/count/count.component';
import { HeroComponent } from './pages/hero/hero.component';
import { DragonballComponent } from './pages/dragonball/dragonball.component';

export const routes: Routes = [
  {
    path: '',
    component: CountComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'dragonball',
    component: DragonballComponent,
  },
  {
    path: '**',
    redirectTo: '',
  }
];
