import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ZionWomensSoccerComponent } from './zion-womens-soccer/zion-womens-soccer.component';
import { ZionMensSoccerComponent } from './zion-mens-soccer/zion-mens-soccer.component';
import { ColumbiaArsenalU17bSoccerComponent } from './columbia-arsenal-u17b-soccer/columbia-arsenal-u17b-soccer.component';



@NgModule({
  declarations: [
    ZionWomensSoccerComponent,
    ZionMensSoccerComponent,
    ColumbiaArsenalU17bSoccerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TeamsModule { }
