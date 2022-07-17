import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LinkComponent } from './link/link.component';

@NgModule({
  declarations: [
    PageNotFoundComponent,
    LinkComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [LinkComponent]
})
export class ComponentsModule { }
