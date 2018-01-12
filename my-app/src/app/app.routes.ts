import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './features/home/home.component';
import {LeneComponent} from './features/lene/lene.component';
import {KellyComponent} from './features/kelly/kelly.component';

let APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'lenes-page',
        component: LeneComponent,
        outlet: 'tabListing'
      },
      {
        path: 'kellys-page',
        component: KellyComponent,
        outlet: 'tabListing'
      }
    ]

  }
];
export let AppRouterModule = RouterModule.forRoot(APP_ROUTES, { useHash: true });
