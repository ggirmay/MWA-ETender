import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, MinLengthValidator } from '@angular/forms';
import { RegService } from './reg.service';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-register',
  template: `
  <mat-card>
  <h3>Fill out this form to register</h3>
 
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
    <input matInput placeholder="email" type="email" formControlName="email"/>
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

  <mat-radio-group aria-label="Select an option" formControlName="type">Registering as
  <mat-radio-button name = "client" value="client" (click)="setradio('client')" checked="true"> Client </mat-radio-button>
  <mat-radio-button name = "bidder" value="bidder"(click)="setradio('bidder')" > Bidder </mat-radio-button>
  </mat-radio-group><br/>

  <mat-form-field *ngIf="isSelected('bidder')">
  <mat-label>Catagory</mat-label><br/>
  <mat-select formControlName="catagory" multiple>
  <mat-option value="art">Art</mat-option>
  <mat-option value="entertainment">Entertainment</mat-option>
  <mat-option value="music">Music</mat-option>
  <mat-option value="IT">IT</mat-option>
  </mat-select>
  </mat-form-field><br/>
  <button type="submit" mat-raised-button color="primary">Register</button>
 
</form>
</mat-card>
  `,
  styles: ['form, h3 {width:80%; margin:auto}']
})
export class NewRegisterComponent implements OnInit {
regForm:FormGroup
  constructor(private fb:FormBuilder, private registerService:RegService, private router:Router) { 
    this.regForm=fb.group({
          'cname':['', Validators.required],
          'lnumber':['', Validators.required],
          'usertype':['', Validators.required],
          'catagory': ['', Validators.required],
          'email':['', [Validators.required, Validators.email]],
          'location':[''],
          'uname':['', Validators.required],
          'pwd':['', [Validators.required, Validators.minLength(6)]],
          'type':['']
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
         if(formValue.type=='client')
          this.router.navigate(['/bidde'])
        else
          this.router.navigate(['/bidder'])

        },
        err=> console.log(err) )
  }
  ngOnInit(): void {
  }
  private selectedLink: string="client";        
  
  setradio(e: string): void   
{  

      this.selectedLink = e;  
        
}  

  isSelected(name: string): boolean   
{  

      if (!this.selectedLink) { // if no radio button is selected, always return false so every nothing is shown  
          return false;  
}  

      return (this.selectedLink === name); // if current radio button is selected, return true, else return false  
  }   

}

