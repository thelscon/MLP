import { Component, OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: '.mlp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  windowInnerWidth = window.innerWidth ;

  constructor() {
    fromEvent ( window , 'resize' )
      .subscribe ( () => {
        this.windowInnerWidth = window.innerWidth ;
      } )
  }

  ngOnInit(): void {
  }

}
