import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ComponentsModule } from './components/components.module';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule
  ],
  exports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    RouterModule
  ]
})
export class CoreModule { }
