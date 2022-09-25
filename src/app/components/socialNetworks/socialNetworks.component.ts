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

  constructor (
    public theme : ThemeService ) {}

  overout ( name : SocialNetworksName ) {
    switch ( name ) {
      case 'facebook' : {
        this.facebookOver = !this.facebookOver ;
      } break ;
      case 'instagram' : {
        this.instagramOver = !this.instagramOver ;
      } break ;
      case 'twitter' : {
        this.twitterOver = !this.twitterOver ;
      } break ;
      case 'skype' : {
        this.skypeOver = !this.skypeOver ;
      } break ;
    }
  }

  ngOnInit(): void {}
}