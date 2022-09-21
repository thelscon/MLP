import { Component, OnInit } from "@angular/core";
import { fromEvent , map } from "rxjs";

import { ThemeService } from "src/app/services/theme.service";

export type SocialNetworksName = 'facebook' | 'instagram' | 'twitter' | 'skype' ;

@Component ({
  selector : '#mlp-intro-social' ,
  templateUrl : './socialNetworks.component.html' ,
  styleUrls : [ './socialNetworks.component.scss' ]
})
export class SocialNetworksComponent implements OnInit {
  readonly socialNetworks : SocialNetworksName [] = [ 'facebook' , 'instagram' , 'twitter' , 'skype' ] ;
  facebookOver = false ;
  instagramOver = false ;
  twitterOver = false ;
  skypeOver = false ;

  constructor (public theme : ThemeService) {}

  over ( name : SocialNetworksName ) {
    switch ( name ) {
      case 'facebook' : {
        this.facebookOver = true ;
      } break ;
      case 'instagram' : {
        this.instagramOver = true ;
      } break ;
      case 'twitter' : {
        this.twitterOver = true ;
      } break ;
      case 'skype' : {
        this.skypeOver = true ;
      } break ;
    }
  }

  out ( name : SocialNetworksName ) {
    switch ( name ) {
      case 'facebook' : {
        this.facebookOver = false ;
      } break ;
      case 'instagram' : {
        this.instagramOver = false ;
      } break ;
      case 'twitter' : {
        this.twitterOver = false ;
      } break ;
      case 'skype' : {
        this.skypeOver = false ;
      } break ;
    }
  }

  ngOnInit(): void {}
}