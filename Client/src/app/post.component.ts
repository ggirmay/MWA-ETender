import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BiddeService } from './bidde.service';
import * as decode from 'jwt-decode';

@Component({
  selector: 'app-post',
  template: `
  <h3>Posting a bet</h3>
  <form [formGroup]="postForm" (ngSubmit)="onSubmit()">
  <mat-form-field >
    <mat-label>item Name </mat-label>
    <input matInput placeholder="item" type="text" formControlName="itemName">
  </mat-form-field><br>

  <mat-form-field >
    <mat-label>amount</mat-label>
    <input matInput placeholder="amount" type="text" formControlName="amount"/>
   </mat-form-field><br>
  <mat-form-field >
    <mat-label>Catagory</mat-label>
    <input matInput placeholder="catagory" type="text" formControlName="catagory"/>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>deadline</mat-label>
    <input matInput placeholder="deadline" type="text" formControlName="deadline"/>
  </mat-form-field><br/>
  <button>send</button>

</form>
  `,
  styles: []
})
export class PostComponent implements OnInit {
  postForm: FormGroup;
  constructor(private fb: FormBuilder, private _biddeService:BiddeService) { 
    this.postForm=fb.group({
      'itemName':['', Validators.required],
      'amount':['', Validators.required],
      'catagory':['', Validators.required],
      'deadline':['']
    })
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
    const token=localStorage.getItem('token'); 
    const payload=decode(token)['subject']
    formValue.componey=payload._id;
    console.log(JSON.stringify(formValue));
    this._biddeService.createBidde(formValue)
    .subscribe(
      res=> console.log(res),
      err=> console.log(err))
      this.postForm.reset()
  }
  ngOnInit(): void {
  }

}
