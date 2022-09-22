import { Injectable } from "@angular/core";
import { fromEvent } from "rxjs";

@Injectable ({
  providedIn : 'root'
})
export class WindowService {

  readonly resize = fromEvent ( window , 'resize' ) ;

  constructor () {}
}