import { Component, OnInit } from "@angular/core";

import { ThemeService } from "src/app/services/theme.service";
import { WindowService } from "src/app/services/window.service";

@Component ({
  selector : '#mlp-intro' ,
  templateUrl : './intro.component.html' ,
  styleUrls : [ './intro.component.scss' ]
})
export class IntroComponent implements OnInit {
  windowWidth = window.innerWidth ;

  constructor ( 
    public theme : ThemeService ,
    public windowService : WindowService ) {

      this.windowService.resize.subscribe (
        ( event ) => {
          this.windowWidth = window.innerWidth ;
        }
      )

    }

  ngOnInit(): void {}
}