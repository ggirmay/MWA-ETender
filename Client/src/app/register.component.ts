import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegService } from './reg.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
template: `
  <h3>Registering a Bidder</h3>
  <form [formGroup]="regForm" (ngSubmit)="onSubmit()">

  <mat-form-field>
  <mat-label> Select an option </mat-label>
  <mat-radio-button value="client">Client</mat-radio-button>
  <mat-radio-button value="bidder">Bidder</mat-radio-button>
  </mat-form-field><br/>



  <mat-form-field >
    <mat-label>Company Name </mat-label>
    <input matInput placeholder="cname" type="text" formControlName="cname">
  </mat-form-field><br>

  

  <mat-form-field >
    <mat-label>Lisence Number</mat-label>
    <input matInput placeholder="lnumber" type="text" formControlName="lnumber"/>
   </mat-form-field><br>
  <mat-form-field >
    <mat-label>Catagory</mat-label>
    <input matInput placeholder="catagory" type="text" formControlName="catagory"/>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>Email</mat-label>
    <input matInput placeholder="email" type="text" formControlName="email"/>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>Location</mat-label>
    <input matInput placeholder="location" type="text" formControlName="location"/>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>User Name</mat-label>
    <input matInput placeholder="user name" type="text" formControlName="uname"/>
  </mat-form-field><br/>
  <mat-form-field >
  <mat-label>Password</mat-label>
    <input matInput placeholder="pwd" type="password" formControlName="pwd"/>
  </mat-form-field><br/>
  <button>send</button>

</form>
  `,
  styles: ['form, h3 {text-align: center; width:80%}']
 
  
  
})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  catForm: FormGroup;
  constructor(private fb: FormBuilder, private _regService:RegService, private _router : Router) { 
    this.regForm=fb.group({
      'cname':['', Validators.required],
      'lnumber':['', Validators.required],
     // 'catagory':['', Validators.required],
      'email':['', Validators.required],
      'location':[''],
      'uname':['', Validators.required],
      'pwd':['', Validators.required]
    })
    this.catForm=fb.group({
      // 'cname':['', Validators.required],
      // 'lnumber':['', Validators.required],
      'catagory':['', Validators.required]
      // 'email':['', Validators.required],
      // 'location':[''],
      // 'uname':['', Validators.required],
      // 'pwd':['', Validators.required]
    })
    // this.postForm.valueChanges.subscribe(
    //   (data: any) => console.log(data)
    // );
  }
  ngOnInit(): void {
    throw new Error("Method not implemented.");
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
      res=> {
        console.log(res),
       localStorage.setItem('token', res.token)
      },
      err=> console.log(err) 
  )
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
