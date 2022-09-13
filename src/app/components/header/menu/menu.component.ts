import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: '#mlp-header-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  readonly menuItem = [
    'Home' ,
    'About Us' ,
    'Our Work' ,
    'Clients' ,
    'Our Blog' ,
    'Contact Us' ,
    // 'L' ,
    // 'Lorem Two' ,
    // 'Lorem' ,
    // 'Lorem' ,
    // 'Lorem One' ,
    // 'Lorem Two'
  ] ;

  constructor( public theme : ThemeService ) {}

  ngOnInit(): void {
  }

}
