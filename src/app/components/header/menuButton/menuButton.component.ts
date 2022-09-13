import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: '#mlp-header-menuButton',
  templateUrl: './menuButton.component.svg',
  styleUrls: ['./menuButton.component.scss']
})
export class MenuButtonComponent implements OnInit {

  constructor( public theme : ThemeService ) { }

  ngOnInit(): void {
  }

}
