import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegService } from './reg.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-register',
  template: `
  <h3>Registering a Bidder</h3>
 
  <form [formGroup]="regForm" (ngSubmit)="onSubmit()">
  

  <mat-form-field>
    <mat-label>Company Name</mat-label>
    <input matInput placeholder="cname" type="text" formControlName="cname"/>
  </mat-form-field><br>

  <mat-form-field>
    <mat-label>Lisence Number</mat-label>
    <input matInput placeholder="lnumber" type="text" formControlName="lnumber"/>
  </mat-form-field><br>

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

  
  
  <mat-form-field>
    <mat-label>Catagory</mat-label><br/>
    <mat-select formControlName="catagory" multiple>
    <mat-option value="art">Art</mat-option>
    <mat-option value="entertainment">Entertainment</mat-option>
    <mat-option value="music">Music</mat-option>
    <mat-option value="IT">IT</mat-option>
    </mat-select>
    </mat-form-field><br/>
  <button>submit</button>
  
</form>
  `,
  styles: []
})
export class NewRegisterComponent implements OnInit {
regForm:FormGroup
  constructor(private fb:FormBuilder, private registerService:RegService, private router:Router) { 
    this.regForm=fb.group({
          'cname':['', Validators.required],
          'lnumber':['', Validators.required],
          'usertype':['', Validators.required],
          'catagory': ['', Validators.required],
          'email':['', Validators.required],
          'location':[''],
          'uname':['', Validators.required],
          'pwd':['', Validators.required]
        })
  }

  onSubmit(){
    const formValue=this.regForm.value
    console.log('data of form= '+JSON.stringify(formValue));
      this.registerService.regClient(formValue)
      .subscribe(
        res=> {
          console.log(res),
         localStorage.setItem('token', res.token)
        },
        err=> console.log(err) )
  }
  ngOnInit(): void {
  }

}
