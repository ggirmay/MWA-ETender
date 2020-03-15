import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-Bid',
  template: `
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
export class PostBidComponet{

}
