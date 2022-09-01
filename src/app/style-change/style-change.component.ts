import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../theme.service';

@Component({
  selector: '#mlp-style-change',
  templateUrl: './style-change.component.svg',
  styleUrls: ['./style-change.component.scss']
})
export class StyleChangeComponent implements OnInit {

  constructor( public theme : ThemeService ) { }

  ngOnInit(): void {
  }

}
