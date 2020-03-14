import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  template: `
  <form >
  <mat-form-field >
    <mat-label>Item Name </mat-label>
    <input matInput placeholder="item">
  </mat-form-field><br><br>

  <mat-form-field >
    <mat-label>Amount</mat-label>
    <textarea matInput placeholder="amount"></textarea>
  </mat-form-field>
</form>
  `,
  styles: []
})
export class PostComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
