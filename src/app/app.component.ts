import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

import { ThemeService } from './services/theme.service';
import { WindowService } from './services/window.service';

@Component({
  selector: 'mlp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  windowWidth = window.innerWidth ;

  visibleComponent !: boolean ;
  playVisible !: boolean ;

  constructor (
    public title : Title ,
    public theme : ThemeService ,
    public windowService : WindowService ) {
      
      this.title.setTitle ( 'MLP' ) ;

      this.visibleComponent = this.windowWidth >= 768 ? true : false ;
      if ( this.visibleComponent ) {
        setTimeout (
          () => {
            this.playVisible = true ;
          }
        )
      }
      else {
        this.playVisible = false ;
      }
      
      this.windowService.resize.subscribe (
        ( event ) => {
          if ( window.innerWidth >= 768 && this.visibleComponent === false ) {
            this.visibleComponent = true ;
            setTimeout (
              () => {
                this.playVisible = true ;
              }
            )
          }
          if ( window.innerWidth < 768 && this.visibleComponent ) {
            this.playVisible = false ;
            setTimeout (
              () => {
                this.visibleComponent = false ;
              } , 200
            )
          }
        }
      )
    }
}
