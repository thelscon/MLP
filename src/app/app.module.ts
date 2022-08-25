import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogoComponent } from './logo/logo.component';
import { StyleComponent } from './style/style.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    LogoComponent,
    StyleComponent,
    MenuComponent,
    HeaderComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
