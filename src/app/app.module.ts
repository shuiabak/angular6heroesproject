import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HerolistComponent } from './herolist/herolist.component';
import { HeroformComponent } from './heroform/heroform.component';
import { HomeComponent } from './home/home.component';

import { AppModuleRoutes } from '../app/route/app-module.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HerolistComponent,
    HeroformComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppModuleRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
