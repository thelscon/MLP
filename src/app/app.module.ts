import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { StyleChangeComponent } from './style-change/style-change.component';
import { ButtonMenuComponent } from './button-menu/button-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    MenuComponent,
    HeaderComponent,
    MenuItemComponent,
    StyleChangeComponent,
    ButtonMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
