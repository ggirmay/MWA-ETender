import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BidService } from './BidService';

@Component({
  selector: 'app-winner',
  template: `<div>

    <h1>{{anotherArrayData.PriceAmount}}</h1>
  </div>

  `
,
styles: []
})


export class WinnerComponent implements OnInit {
  winner;
  arrayData;
  anotherArrayData;
constructor(private router: Router,  private bidListService: BidService, private formbBuilder: FormBuilder) {

}
ngOnInit() {
    this.bidListService.getWinner().subscribe(data => {
    this.winner = data;
    this.arrayData = data[0];
    // console.log(this.arrayData.bidder[0].PriceAmount)

    this.anotherArrayData = this.arrayData.bidder[0];
    console.log(this.anotherArrayData.PriceAmount);

  });
}
}
