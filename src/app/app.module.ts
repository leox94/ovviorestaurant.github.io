import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HeroComponent } from './hero/hero.component';
import { RestaurantComponent } from './restaurant/restaurant.component';
import { BoxComponent } from './box/box.component';

import{UtilityService} from './utility.service';
import { DetailComponent } from './detail/detail.component';
import { MenuComponent } from './menu/menu.component';

import {HttpClientModule} from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    RestaurantComponent,
    BoxComponent,
    DetailComponent,
    MenuComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    UtilityService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
