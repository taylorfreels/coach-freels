import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';
import { MdbAngularModule } from './modules/mdb-angular.module';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule,
    MdbAngularModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule,
    MdbAngularModule
  ]
})
export class CoreModule { }
