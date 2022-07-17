import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { AppComponent } from './app.component';
import { TeamsModule } from './teams/teams.module';
import { TrfComponent } from './trf/trf.component';

@NgModule({
  declarations: [
    AppComponent,
    TrfComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    TeamsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
