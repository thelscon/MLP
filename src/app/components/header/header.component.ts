import { Component, OnInit } from '@angular/core';
import { fromEvent , map } from 'rxjs';

import { ThemeService } from '../../services/theme.service';

type opacityType = 'start' | 'middle' | 'end' ;

@Component({
  selector: '#mlp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  windowInnerWidth = window.innerWidth ;
  stateMenu = false ;
  opacity : opacityType = 'start';

  constructor( public theme : ThemeService ) {
    fromEvent ( window , 'resize' )
      .subscribe ( () => {
        this.windowInnerWidth = window.innerWidth ;
        if ( this.windowInnerWidth > 768 && this.stateMenu ) {
          this.stateMenu = false
        }
      } ) ;

    fromEvent ( document , 'click' )
      .pipe (
        map ( ( event : any ) => event.target.id )
      )
      .subscribe ( ( id : any ) => {
        if ( id === 'mlp-button-menu' || id === 'button-menu' || id === 'path-button-menu' ) {
          if ( this.stateMenu === false ) {
            this.stateMenu = true ;      
            setTimeout ( ()=> {
              this.opacity = 'middle' ;
            } ) ;
          }
          else {
            this.opacity = 'end' ;
            setTimeout ( ()=> {
              this.stateMenu = false ;
              this.opacity = 'start' ;
            } , 100 ) ;
          }
          
        }
        else {
          if ( ( id !== 'mlp-style-change' && id !== 'svg-style-change' && id !== 'path-style-change' ) && this.stateMenu ) {
            this.opacity = 'end' ;
            setTimeout ( ()=> {
              this.stateMenu = false ;
              this.opacity = 'start' ;
            } , 100 ) ;
          }
        }
      } )
  }

  ngOnInit(): void {
  }

  changingTheme () : void {
    this.theme.themeName = this.theme.themeName === 'day' ? 'night' : 'day' ;
  }

  clickButtonMenu () : void {
    this.stateMenu = !this.stateMenu ;
  }

  setOpacity () {
    if ( this.windowInnerWidth < 768 ) {
      switch ( this.opacity ) {
        case 'start' : return 'startOpacity' ;
        case 'middle' : return 'middleOpacity' ;
        case 'end' : return 'endOpacity' ;
      }
    }
    else {
      return '' ;
    }
    // return this.windowInnerWidth < 768 ?
    //   this.opacity ? 'noOpacity' : 'fullOpacity'
    //   : '' ;
  }

}
