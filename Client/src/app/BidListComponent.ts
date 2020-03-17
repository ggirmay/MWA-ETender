import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BidService } from './BidService';
import { IBidModel } from './Models/BidModel';

@Component({
  selector: 'app-bid',
  template: `

<div *ngFor="let userdetail of (bidlists)">
  <!-- <h1>{{ bidlists.itemName + " " + bidlists.biddePosted.amount + " " + bidlists.itemName }}</h1>
 -->

</div>

  `,
styles: []
})
export class BidListComponent implements OnInit {
  bidlists: IBidModel[] = [];
  ngOnInit() {
      this.bidListService.getListOfBids().subscribe(data => {
        this.bidlists = data;
        console.log(data);
      });
  }
  constructor(private router: Router,  private bidListService: BidService) {

  }
}
