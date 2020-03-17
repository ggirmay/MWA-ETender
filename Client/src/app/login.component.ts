import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginService } from './login.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login',
template: `
  <h3>Log In Page</h3>
  <form [formGroup]="regForm" (ngSubmit)="onSubmit()">
  <mat-form-field >
    <mat-label>User Name </mat-label>
    <input matInput placeholder="cname" type="text" formControlName="uname">
  </mat-form-field><br>
  <mat-form-field >
  <mat-label>Password</mat-label>
    <input matInput placeholder="pwd" type="password" formControlName="pwd"/>
  </mat-form-field><br/>
  <button>login</button>

</form>
  `,
  styles: ['form, h3 {text-align: center; width:100%}']
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
      res=> {console.log(res)
        localStorage.setItem('token', res.token); 
      this._router.navigate(['/bidde'])
      },
      err=> console.log(err))   
  }

  ngOnInit(): void {
  }
}