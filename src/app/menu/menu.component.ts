import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: '.mlp-menu',
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
    'Contact Us'
  ] ;

  constructor() {}

  ngOnInit(): void {
  }

}
