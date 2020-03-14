import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  template: `

  <h3>Posting a bet</h3>
  <form >
  <mat-form-field >
    <mat-label>item Name </mat-label>
    <input matInput placeholder="item">
  </mat-form-field><br>

  <mat-form-field >
    <mat-label>amount</mat-label>
    <textarea matInput placeholder="amount"></textarea>
  // </mat-form-field><br>
  <mat-form-field >
    <mat-label>Catagory</mat-label>
    <textarea matInput placeholder="catagory"></textarea>
  </mat-form-field><br/>
  <mat-form-field >
    <mat-label>deadline</mat-label>
    <textarea matInput placeholder="deadline"></textarea>
  </mat-form-field><br/>
  <button>send</button>

</form>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
