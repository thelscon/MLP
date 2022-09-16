import { Component, OnInit } from "@angular/core";

@Component ({
  selector : '#mlp-intro-social' ,
  templateUrl : './socialNetworks.component.html' ,
  styleUrls : [ './socialNetworks.component.scss' ]
})
export class SocialNetworksComponent implements OnInit {
  readonly socialNetworks : string [] = [ 'facebook' , 'instagram' , 'twitter' , 'skype' ]
  constructor () {}

  ngOnInit(): void {}
}