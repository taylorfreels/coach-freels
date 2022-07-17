import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './core/components/page-not-found/page-not-found.component';
import { ColumbiaArsenalU17bSoccerComponent } from './teams/columbia-arsenal-u17b-soccer/columbia-arsenal-u17b-soccer.component';
import { ZionMensSoccerComponent } from './teams/zion-mens-soccer/zion-mens-soccer.component';
import { ZionWomensSoccerComponent } from './teams/zion-womens-soccer/zion-womens-soccer.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PageNotFoundComponent },
  { path: 'trf', component: AppComponent },
  { path: 'zion-womens-soccer', component: ZionWomensSoccerComponent },
  { path: 'zion-mens-soccer', component: ZionMensSoccerComponent },
  { path: 'columbia-arsenal-u17b-soccer', component: ColumbiaArsenalU17bSoccerComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
