import { Component, OnInit } from "@angular/core";

import { ThemeService } from "src/app/services/theme.service";

@Component ({
  selector : '#mlp-intro' ,
  templateUrl : './intro.component.html' ,
  styleUrls : [ './intro.component.scss' ]
})
export class IntroComponent implements OnInit {
  constructor ( public theme : ThemeService ) {}

  ngOnInit(): void {
    
  }
}