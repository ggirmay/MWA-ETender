import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BidService } from './BidService';

@Component({
  selector: 'app-bid',
  template: `
<mat-card>
  <form [formGroup]="postGroup" (ngSubmit)="onSubmit()">
  <mat-form-field >
    <mat-label>Bid Name </mat-label>
    <input matInput placeholder="Enter bid" type="text" formControlName="bidName">
  </mat-form-field><br>

  <mat-form-field >
    <mat-label>Client Name</mat-label>
    <input matInput placeholder="Client" type="text" formControlName="clientName"/>
   </mat-form-field><br>
  <mat-form-field >
    <mat-label>Opening Date</mat-label>
    <input matInput placeholder="Opening Date" type="date"  min="2020-01-01"
     max="2020-07-07" formControlName="openingDate"/>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>Closing Date</mat-label>
    <input matInput placeholder="Closing Date" type="date"  min="2020-01-01"
     max="2020-07-07" formControlName="closingDate"/>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>Item Type</mat-label>
    <input matInput placeholder="optional" type="text" formControlName="itemName"/>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>specification </mat-label>
    <textarea matInput rows="6"  formControlName="specification"></textarea>

  </mat-form-field><br/>
  <button mat-raised-button color="primary">Save</button>

</form>
</mat-card>
  `,
styleUrls:['./PostBidComponent.css']
})
export class PostBidComponent implements OnInit {
  postGroup: FormGroup;
  constructor(private formbBuilder: FormBuilder, private bidservice: BidService) {
    this.postGroup = formbBuilder.group({
      'bidName': ['', Validators.required],
      'clientName': ['', Validators.required],
      'openingDate': ['', Validators.required],
      'closingDate': ['', Validators.required],
      // 'uploadDocument': [''],
      'specification': [''],
      'itemName': [''],


    })
    // this.postForm.valueChanges.subscribe(
    //   (data: any) => console.log(data)
    // );
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
