import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from './components/components.module';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule
  ]
})
export class CoreModule { }
