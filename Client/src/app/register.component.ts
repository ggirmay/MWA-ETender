import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  template: `
  <mat-card>
  <form>
  <mat-form-field>
    <textarea name="message1" [(ngModel)]="message1" matInput placeholder="Company Name"></textarea>
  </mat-form-field>
  <mat-form-field>
    <textarea name="message2" [(ngModel)]="message2" matInput placeholder="Email"></textarea>
  </mat-form-field>
  <mat-form-field>
    <textarea name="message3" [(ngModel)]="message3" matInput placeholder="Address"></textarea>
  </mat-form-field>
</form>
<mat-card-actions> 
  <button (click)="post()" mat-button>Post</button>
    </mat-card-actions>
</mat-card>
  `,
  styles: []
})
export class RegisterComponent implements OnInit {

  message1 = '';
  message2 = '';
  message3 = '';
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
  }

  post() {
    console.log('post' , {a: this.message1, b: this.message2, c: this.message3});
    this.http.post('http://localhost:3000/api/message', {a: this.message1, b: this.message2, c: this.message3}).toPromise();
  }

}
