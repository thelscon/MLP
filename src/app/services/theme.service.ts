import { Injectable } from '@angular/core';

type themeNameType = 'day' | 'night' ;

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  themeName : themeNameType = 'day' ;

  constructor() { }
}
