import { Component } from '@angular/core';

import { ThemeService } from './services/theme.service';
import { WindowService } from './services/window.service';

@Component({
  selector: 'mlp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MLP';

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
}
