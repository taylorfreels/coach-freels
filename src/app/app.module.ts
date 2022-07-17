import { NgModule } from '@angular/core';

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
    AppRoutingModule,
    CoreModule,
    TeamsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
