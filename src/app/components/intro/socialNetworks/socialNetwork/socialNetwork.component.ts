import { Component, Input, OnInit } from "@angular/core";

import { ThemeService } from "src/app/services/theme.service";
import { SocialNetworksName } from "../socialNetworks.component";

@Component ({
  selector : '[socialNetwork]' ,
  templateUrl : './socialNetwork.component.html' ,
  styleUrls : [ './socialNetwork.component.scss' ]
})
export class SocialNetworkComponent implements OnInit {
  @Input () socialNetwork !: SocialNetworksName ;
  @Input () overout !: boolean ;
  constructor ( public theme : ThemeService ) {}

  ngOnInit(): void {
    
  }
}