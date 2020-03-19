import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BiddeService } from './bidde.service';
import * as decode from 'jwt-decode';

@Component({
  selector: 'app-post',
  template: `
  <mat-card>
  <h2>Welcome {{user}}</h2>
  <h3>Posting a bet</h3>
  <form [formGroup]="postForm" (ngSubmit)="onSubmit()">
  <mat-form-field >
    <mat-label>item Name </mat-label>
    <input matInput placeholder="item" type="text" formControlName="itemName">
  </mat-form-field><br>

  <mat-form-field >
    <mat-label>amount</mat-label>
    <input matInput placeholder="amount" type="number" formControlName="amount"/>
   </mat-form-field><br>
  <mat-form-field >
    <mat-label>Catagory</mat-label>
    <input matInput placeholder="catagory" type="text" formControlName="catagory"/>
  </mat-form-field><br/>

  <mat-form-field >
    <mat-label>Choose a deadline</mat-label>
    <input matInput placeholder="deadline" type="date" formControlName="deadline"/>
  </mat-form-field><br/>

  <button type="submit" [disabled]="!postForm.valid" mat-raised-button color="primary">Send</button>

</form>

</mat-card>
  `,
  styles: ['form, h3 {width:80%; margin:auto}']
})
export class PostComponent implements OnInit {
  postForm: FormGroup;
  public token;
  public payload;
  public user;
  constructor(private fb: FormBuilder, private _biddeService:BiddeService) { 
    this.postForm=fb.group({
      'itemName':['', Validators.required],
      'amount':['', Validators.required],
      'catagory':['', Validators.required],
      'deadline':['']
    })

    this.token=localStorage.getItem('token'); 
    this.payload=decode(this.token)['subject']
this.user=this.payload.cname;
    // this.postForm.valueChanges.subscribe(
    //   (data: any) => console.log(data)
    // );
  }

  onSubmit(){
    const formValue=this.postForm.value;
    // const data={
    //   'itemName':this.postForm.value.itemName,
    //   'amount':this.postForm.value.amount,
    //   'catagory':this.postForm.value.catagory,
    //   'deadline':this.postForm.value.deadline
    // }
    // const token=localStorage.getItem('token'); 
    // const payload=decode(token)['subject']
    formValue.componey=this.payload._id;
    console.log(JSON.stringify(formValue));
    this._biddeService.createBidde(formValue)
    .subscribe(
      res=> console.log(res),
      err=> console.log(err))
      this.postForm.reset();
  }
  ngOnInit(): void {
  }

}
