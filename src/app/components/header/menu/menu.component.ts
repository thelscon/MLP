import { Component, OnInit } from '@angular/core';

import { ThemeService } from '../../../services/theme.service';

@Component({
  selector: '#mlp-menu',
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
    // 'Lorem One' ,
    // 'Lorem Two' ,
    // 'Lorem' ,
    // 'Lorem Two' ,
    // 'Lorem One' ,
    // 'Lorem Two'
  ] ;

  constructor( public theme : ThemeService ) {}

  ngOnInit(): void {
  }

}
