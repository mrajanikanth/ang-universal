import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeComponent } from './components/home/home.component';
import { Error404Component } from './components/error404/error404.component';
import {AppRoutingModule} from './app-routing.module';

export const DECLARATIONS = [
  HomeComponent,
  Error404Component
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Error404Component,
    DECLARATIONS
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    CoreModule.forClient()
    // CoreModule.forServer()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
