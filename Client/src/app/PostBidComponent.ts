import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BidService } from './BidService';

@Component({
  selector: 'app-bid',
  template: `
<mat-card>
  <form [formGroup]="postGroup" (ngSubmit)="onSubmit()">

  <mat-form-field >
    <mat-label>Applying Date</mat-label>
    <input matInput placeholder="applying Date" type="date"  min="2020-01-01"
     max="2020-07-07" formControlName="applyingDate"/>
  </mat-form-field><br/>

  <mat-form-field >
    <mat-label>Amount</mat-label>
    <input matInput placeholder="optional" type="text" formControlName="amount"/>
  </mat-form-field><br/>
  <button mat-raised-button color="primary">Save</button>

</form>
</mat-card>
  `,
styleUrls: ['./PostBidComponent.css']
})
export class PostBidComponent implements OnInit {
  postGroup: FormGroup;
  constructor(private formbBuilder: FormBuilder, private bidservice: BidService) {
    this.postGroup = formbBuilder.group({
      amount: ['', Validators.required],
      applyingDate: ['', Validators.required],
      // 'uploadDocument': [''],


    });
  }

  onSubmit(){
    const formValue = this.postGroup.value;
    console.log('data of form= ' + JSON.stringify(formValue));
    this.bidservice.postBid(formValue)
    .subscribe(
      res => console.log(res),
      err => console.log(err))
  }
  ngOnInit(): void {
  }

}
