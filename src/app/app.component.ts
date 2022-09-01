import { Component } from '@angular/core';

import { ThemeService } from './theme.service';

@Component({
  selector: 'mlp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'MLP';

  constructor ( public theme : ThemeService ) {}
}
