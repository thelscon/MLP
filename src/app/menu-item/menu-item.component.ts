import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: '.mlp-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss']
})
export class MenuItemComponent implements OnInit {

  @Input () item !: string ;

  constructor() { }

  ngOnInit(): void {
  }

}
