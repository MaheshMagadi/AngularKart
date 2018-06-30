import { Component, OnInit } from '@angular/core';
import { contents } from '../content-source';

@Component({
  selector: 'app-left-nav-bar',
  templateUrl: './left-nav-bar.component.html',
  styleUrls: ['./left-nav-bar.component.css']
})
export class LeftNavBarComponent implements OnInit {

  private pages: any[] = contents;

  about:any = 'Shiva';
  
  
  constructor() { }

  ngOnInit() {
  }

}
