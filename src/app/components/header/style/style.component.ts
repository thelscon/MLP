import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: '#mlp-header-style',
  templateUrl: './style.component.svg',
  styleUrls: ['./style.component.scss']
})
export class StyleComponent implements OnInit {

  constructor( public theme : ThemeService ) { }

  ngOnInit(): void {
  }

}
