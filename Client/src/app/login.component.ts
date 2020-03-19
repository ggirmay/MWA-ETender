import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router'
import * as decode from 'jwt-decode';
// import {jwt_decode} from 'jwt-decode'

@Component({
  selector: 'app-login',
template: `
<mat-card>
  <h2>Enter your username and password</h2>
  <form [formGroup]="regForm" (ngSubmit)="onSubmit()">
  <mat-form-field >
    <mat-label>User Name </mat-label>
    <input matInput placeholder="user name" type="text" formControlName="uname">
  </mat-form-field><br>
  <mat-form-field >
  <mat-label>Password</mat-label>
    <input matInput placeholder="password" type="password" formControlName="pwd"/>
  </mat-form-field><br/>
  <button type="submit" [disabled]="!regForm.valid" mat-raised-button color="primary">Login</button>

</form>
</mat-card>
  `,
  styles: ['form, h2 {width:80%; margin:auto}']

})
export class LoginComponent implements OnInit {
  regForm: FormGroup;
  constructor(private fb: FormBuilder, private _loginService:LoginService, private _router : Router) { 
    this.regForm=fb.group({
      'uname':['', Validators.required],
      'pwd':['', Validators.required]
    }) 
  }

  onSubmit(){
    const formValue=this.regForm.value;
    console.log('data of form= '+JSON.stringify(formValue));
    this._loginService.logClient(formValue)
    .subscribe(
      res=> {
        localStorage.setItem('token', res.token); 
        const payload=decode(res.token)['subject']
        console.log(payload._id);
        // console.log("decoded= "+JSON.stringify(decoded))
        console.log("type= "+payload.type);
        if(payload.type=='client')
          this._router.navigate(['/bidde'])
        else
          this._router.navigate(['/bidder'])
      
      },
      err=> console.log(err))   
  }

  ngOnInit(): void {
  }
}