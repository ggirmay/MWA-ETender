import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegService } from './reg.service';

@Component({
  selector: 'app-register',
template: `
  <h3>Registering a Bidder</h3>
  <form [formGroup]="regForm" (ngSubmit)="onSubmit()">
  <mat-form-field >
    <mat-label>Company Name </mat-label>
    <input matInput placeholder="name" type="text" formControlName="name">
  </mat-form-field><br>

  <mat-form-field >
    <mat-label>Lisence Number</mat-label>
    <input matInput placeholder="number" type="text" formControlName="number"/>
   </mat-form-field><br>
  <mat-form-field >
    <mat-label>Catagory</mat-label>
    <input matInput placeholder="catagory" type="text" formControlName="catagory"/>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>Location</mat-label>
    <input matInput placeholder="location" type="text" formControlName="location"/>
  </mat-form-field><br/>
  <button>send</button>

</form>
  `,
  styles: []
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  constructor(private fb: FormBuilder, private _regService:RegService) { 
    this.regForm=fb.group({
      'name':['', Validators.required],
      'number':['', Validators.required],
      'catagory':['', Validators.required],
      'location':['']
    })
    // this.postForm.valueChanges.subscribe(
    //   (data: any) => console.log(data)
    // );
  }

  onSubmit(){
    const formValue=this.regForm.value;
    // const data={
    //   'itemName':this.postForm.value.itemName,
    //   'amount':this.postForm.value.amount,
    //   'catagory':this.postForm.value.catagory,
    //   'deadline':this.postForm.value.deadline
    // }
    console.log('data of form= '+JSON.stringify(formValue));
    this._regService.regClient(formValue)
    .subscribe(
      res=> console.log(res),
      err=> console.log(err))   
  }
  ngOnInit(): void {
  }
//   template: `
//   <mat-card>
//   <form>
//   <mat-form-field>
//     <textarea name="message1" [(ngModel)]="message1" matInput placeholder="Company Name"></textarea>
//   </mat-form-field>
//   <mat-form-field>
//     <textarea name="message2" [(ngModel)]="message2" matInput placeholder="Email"></textarea>
//   </mat-form-field>
//   <mat-form-field>
//     <textarea name="message3" [(ngModel)]="message3" matInput placeholder="Address"></textarea>
//   </mat-form-field>
// </form>
// <mat-card-actions> 
//   <button (click)="post()" mat-button>Post</button>
//     </mat-card-actions>
// </mat-card>
//   `,
//   styles: []
// })
// export class RegisterComponent implements OnInit {

//   message1 = '';
//   message2 = '';
//   message3 = '';
//   constructor(public http: HttpClient) { }

//   ngOnInit(): void {
//   }

//   post() {
//     console.log('post' , {a: this.message1, b: this.message2, c: this.message3});
//     this.http.post('http://localhost:3000/api/message', {a: this.message1, b: this.message2, c: this.message3}).toPromise();
//   }

// }
}
