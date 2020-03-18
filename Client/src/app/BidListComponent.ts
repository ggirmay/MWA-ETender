import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BidService } from './BidService';
// import { IBidModel } from './Models/BidModel';

@Component({
  selector: 'app-bid',
  templateUrl: './BidListComponent.html'
,
styleUrls: ['./BidListComponent.css']
})
export class BidListComponent implements OnInit {
  constructor(private router: Router,  private bidListService: BidService, private formbBuilder: FormBuilder) {
    this.postGroup = formbBuilder.group({
      amount: ['', Validators.required],
      applyingDate: ['', Validators.required],
    });
  }
  postGroup: FormGroup;
  bidlists;
  arraydData = [];
  particularData;
  isclicked = false;
  ngOnInit() {
      this.bidListService.getListOfBids().subscribe(data => {
        // const arr = data[0];
        console.log(this.bidlists);
        // this. filterdData = arr.biddePosted;
        // console.log(this.filterdData[2]._id);
        // // this.particularData = this.filterdData[2].itemName;

      });
  }
  applyBid() {
    const formValue = this.postGroup.value;
    console.log('data of form= ' + JSON.stringify(formValue));
    this.bidListService.SavefBids(formValue)
    .subscribe(
      res => console.log(res),
      err => console.log(err));
  }
  viewDetails() {
    this.isclicked = true;
    console.log('hello');
  }
  saveAppliedBid() {
    const formValue = this.postGroup.value;
    console.log('data of form= ' + JSON.stringify(formValue));
    this.bidListService.SaveAppliedBids(formValue)
    .subscribe(
      res => console.log(res),
      err => console.log(err));
  }
}
