import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RegService } from './reg.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
template: `
`,
  styles: ['form, h3 {width:80%; margin:auto}']

})
export class RegisterComponent implements OnInit {
  regForm: FormGroup;
  constructor(private fb: FormBuilder, private _regService:RegService, private _router : Router) {
  //catForm: FormGroup;
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
        //   'catagory':this.postForm.value.catagory,
    //   'deadline':this.postForm.value.deadline
    // }
        
    //   'deadline':this.postForm.value.deadline
    // }
    onSubmit(){
      const formValue=this.regForm.value
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
    

    handleChange(checkbox) {
      if(checkbox.checked == true){
          document.getElementById("catagory").removeAttribute("disabled");
      }else{
          document.getElementById("submit").setAttribute("disabled", "disabled");
     }
  }
    
    
  ngOnInit(): void {
  }

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

//    ngOnInit(): void {
// }

//   post() {
//     console.log('post' , {a: this.message1, b: this.message2, c: this.message3});
//     this.http.post('http://localhost:3000/api/message', {a: this.message1, b: this.message2, c: this.message3}).toPromise();
//   }

// }

// <mat-form-field>
// <mat-radio-group #reg>
// <mat-label> Select an option </mat-label>
// <mat-radio-button value ="client">Client</mat-radio-button>
// <mat-radio-button value ="bidder">Bidder</mat-radio-button>
// <mat-radio-group>
// </mat-form-field>

// <mat-form-field">
// <mat-label> Select an option </mat-label>
// <mat-select[(value)] = "selectedValue multiple "
// <mat-option>None</mat-option>
// <mat-option value="art">Art</mat-option>
// <mat-option value="entertainment">Entertainment</mat-option>
// <mat-option value="music">Music</mat-option>
// <mat-option value="IT">IT</mat-option>
// </mat-select> 
// </mat-form-field><br/>


// <mat-form-field>
// <mat-radio-group #reg>
// <mat-label> Select an option </mat-label><br/>
// <mat-radio-button value ="client">Client</mat-radio-button> <mat-radio-button value ="bidder">Bidder</mat-radio-button>
// </mat-radio-group>
// </mat-form-field><br/>

// <mat-form-field >
// <mat-label> Select an option </mat-label>
// <mat-select [(value)] = "selectedValue" multiple>
// <mat-option>None</mat-option>
// <mat-option value="art">Art</mat-option>
// <mat-option value="entertainment">Entertainment</mat-option>
// <mat-option value="music">Music</mat-option>
// <mat-option value="IT">IT</mat-option>
// </mat-select> 
// </mat-form-field><br/>


// <mat-form-field>
//   <input name="options"  [(ngModel)]="options" type="radio" [value]="true" [checked]="options"/> Bidder
  
//   <input name="options"  [(ngModel)]="options" type="radio" [value]="false" [checked]="!options"/> Client
//   </mat-form-field><br>



// <h3>Registering a Bidder</h3>
//   <input type='checkbox' onchange='handleChange(this);'>Bidder
//   <input type='checkbox' onchange='handleChange(this);'>Client<br/>
//   <form [formGroup]="regForm" (ngSubmit)="onSubmit()">

//   <mat-form-field>
//     <mat-label>Company Name</mat-label>
//     <input matInput placeholder="cname" type="text" formControlName="cname"/>
//    </mat-form-field><br>
//   <mat-form-field>
//     <mat-label>Lisence Number</mat-label>
//     <input matInput placeholder="lnumber" type="text" formControlName="lnumber"/>
//    </mat-form-field><br>
//     <mat-form-field >
//     <mat-label>Email</mat-label>
//     <input matInput placeholder="email" type="text" formControlName="email"/>
//   </mat-form-field><br/>
//   <mat-form-field >
//     <mat-label>Location</mat-label>
//     <input matInput placeholder="location" type="text" formControlName="location"/>
//   </mat-form-field><br/>
//   <mat-form-field >
//     <mat-label>User Name</mat-label>
//     <input matInput placeholder="user name" type="text" formControlName="uname"/>
//   </mat-form-field><br/>
//   <mat-form-field >
//   <mat-label>Password</mat-label>
//     <input matInput placeholder="pwd" type="password" formControlName="pwd"/>
//   </mat-form-field><br/>

//   <mat-form-field>
//   <mat-label>Catagory</mat-label><br/>
//   <mat-select formControlName="catagory" multiple>
//   <mat-option value="art">Art</mat-option>
//   <mat-option value="entertainment">Entertainment</mat-option>
//   <mat-option value="music">Music</mat-option>
//   <mat-option value="IT">IT</mat-option>
//   </mat-select>
//   </mat-form-field><br/>
//   <button>send</button>

// </form>