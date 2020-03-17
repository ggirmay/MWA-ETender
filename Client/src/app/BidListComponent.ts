import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BidService } from './BidService';
import { IBidModel } from './Models/BidModel';

@Component({
  selector: 'app-bid',
  template: `
<div *ngFor="let post of filterdData">

    <p >Item Name {{post.itemName}}</p>

    <p> openingDate {{post.openingDate}}
    <p> Amount {{post.amount}}
    <p> catagory {{post.catagory}}
      <h6>-------------------------------------------------------------------------</h6>
    </div>
<mat-card>
  <form [formGroup]="postGroup" (ngSubmit)="applyBid()">
  <mat-form-field >
    <mat-label>Applying Date</mat-label>
    <input matInput placeholder="applying Date" type="date"  min="2020-01-01"
     max="2020-07-07" formControlName="applyingDate"/>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>Amount </mat-label>
    <input matInput placeholder="optional" type="text" formControlName="amount"/>
  </mat-form-field><br/>
  <button mat-raised-button color="primary">Save</button>

</form>
</mat-card>
  `,
styleUrls: ['./BidListComponent.css']
})
export class BidListComponent implements OnInit {
  postGroup: FormGroup;
  bidlists;
  filterdData;
  particularData;
  ngOnInit() {
      this.bidListService.getListOfBids().subscribe(data => {
        this.bidlists = data;
        const arr = data[0];
        // console.log(arr.biddePosted);
        this. filterdData = arr.biddePosted;
        // console.log(this.filterdData[2].itemName);
        // this.particularData = this.filterdData[2].itemName;

      });
  }
  constructor(private router: Router,  private bidListService: BidService, private formbBuilder: FormBuilder) {
    this.postGroup = formbBuilder.group({
      amount: ['', Validators.required],
      applyingDate: ['', Validators.required],
    });
  }
  applyBid(){
    const formValue = this.postGroup.value;
    console.log('data of form= ' + JSON.stringify(formValue));
    this.bidListService.SavefBids(formValue)
    .subscribe(
      res => console.log(res),
      err => console.log(err))
  }
}
