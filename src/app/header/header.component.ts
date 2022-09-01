import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

import { ThemeService } from '../theme.service';

@Component({
  selector: '.mlp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  windowInnerWidth = window.innerWidth ;

  constructor( public theme : ThemeService ) {
    fromEvent ( window , 'resize' )
      .subscribe ( () => {
        this.windowInnerWidth = window.innerWidth ;
      } )
  }

  ngOnInit(): void {
  }

  changingTheme () {
    this.theme.themeName = this.theme.themeName === 'day' ? 'night' : 'day' ;
  }

}
