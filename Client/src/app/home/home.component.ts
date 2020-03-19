import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
    <h1>WELCOME TO ETENDER</h1>
    <img  src="./assets/Bid_logo.png" style="width:350px;"> <span>Bid Farewell To High Prices!!</span>
    
  `,
  styles: ['img {float: left; width:80%; }, h2, h1 {margin:auto}, h2 {width:8%}, span{font-size:90px} ']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
