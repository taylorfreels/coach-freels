import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { TrfComponent } from './trf/trf.component';
import { ColumbiaArsenalU17bSoccerComponent } from './teams/columbia-arsenal-u17b-soccer/columbia-arsenal-u17b-soccer.component';
import { ZionMensSoccerComponent } from './teams/zion-mens-soccer/zion-mens-soccer.component';
import { ZionWomensSoccerComponent } from './teams/zion-womens-soccer/zion-womens-soccer.component';

export const teamRoutes: Routes = [
  { path: 'zion-womens-soccer', component: ZionWomensSoccerComponent, data: { name: 'Zion Women\'s Soccer' } },
  { path: 'zion-mens-soccer', component: ZionMensSoccerComponent, data: { name: 'Zion Men\'s Soccer' } },
  { path: 'columbia-arsenal-u17b-soccer', component: ColumbiaArsenalU17bSoccerComponent, data: { name: 'Columbia Arsenal U17B Soccer' } }
];

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PageNotFoundComponent },
  { path: 'trf3141592653589793', component: TrfComponent },
  ...teamRoutes,
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
