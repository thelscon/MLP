import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../theme.service';

@Component({
  selector: '#mlp-button-menu',
  templateUrl: './button-menu.component.svg',
  styleUrls: ['./button-menu.component.scss']
})
export class ButtonMenuComponent implements OnInit {

  constructor( public theme : ThemeService ) { }

  ngOnInit(): void {
  }

}
