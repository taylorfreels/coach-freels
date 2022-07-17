import { NgModule } from '@angular/core';

import { ZionWomensSoccerComponent } from './zion-womens-soccer/zion-womens-soccer.component';
import { ZionMensSoccerComponent } from './zion-mens-soccer/zion-mens-soccer.component';
import { ColumbiaArsenalU17bSoccerComponent } from './columbia-arsenal-u17b-soccer/columbia-arsenal-u17b-soccer.component';
import { TeamsComponent } from './teams.component';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    ZionWomensSoccerComponent,
    ZionMensSoccerComponent,
    ColumbiaArsenalU17bSoccerComponent,
    TeamsComponent
  ],
  imports: [CoreModule],
  exports: [TeamsComponent]
})
export class TeamsModule { }
