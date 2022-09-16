import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { LogoComponent } from './components/header/logo/logo.component';
import { StyleComponent } from './components/header/style/style.component';
import { MenuComponent } from './components/header/menu/menu.component';
import { MenuButtonComponent } from './components/header/menuButton/menuButton.component';

import { IntroComponent } from './components/intro/intro.component';
import { IntroHeaderComponent } from './components/intro/header/header.component';
import { IntroTextComponent } from './components/intro/text/text.component';

import { SocialNetworksComponent } from './components/intro/socialNetworks/socialNetworks.component';
import { FacebookComponent } from './components/intro/socialNetworks/facebook/facebook.component';
import { InstagramComponent } from './components/intro/socialNetworks/instagram/instagram.component';
import { TwitterComponent } from './components/intro/socialNetworks/twitter/twitter.component';
import { SkypeComponent } from './components/intro/socialNetworks/skype/skype.component';

@NgModule({
  declarations: [
    AppComponent,

    HeaderComponent,
    LogoComponent,
    MenuComponent,
    StyleComponent,
    MenuButtonComponent,

    IntroComponent,
    IntroHeaderComponent,
    IntroTextComponent,

    SocialNetworksComponent,
    FacebookComponent,
    InstagramComponent,
    TwitterComponent,
    SkypeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
