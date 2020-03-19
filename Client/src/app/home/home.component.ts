import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
  
    <h1>WELCOME TO ETENDER</h1>
    <img  src="./assets/Bid_logo.png" style="width:250px;"> <h2>Bid Farewell To High Prices!!!</h2>
  `,
  styles: ['img {float: left; width:80%;} ']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
