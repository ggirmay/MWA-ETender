import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BidService } from './BidService';

@Component({
  selector: 'app-winner',
  template: `<div>
<h1>Based on the price you provided </h1>
    <h1>{{anotherArrayData.companyName}}  is a Winner!!!</h1>
    <h1>Thank you for your participation</h1>
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
    console.log(this.winner);

    this.arrayData = data[0];


    console.log(this.arrayData.biddeRecived.length);



    let min = this.arrayData.biddeRecived[0].amount;
    let index = 0;
    for (let i = 1; i < this.arrayData.biddeRecived.length; i++) {
    if (this.arrayData.biddeRecived[i].amount < min) {
        min = this.arrayData.biddeRecived[i].amount;
        index = i;
    }
}
    console.log(min);
    console.log("index:"+index);






    this.anotherArrayData = this.arrayData.biddeRecived[index];
    console.log(this.anotherArrayData.amount);

  });
}
}
