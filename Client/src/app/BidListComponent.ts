import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BidService } from './BidService';
import * as decode from 'jwt-decode';


@Component({
  selector: 'app-bid',
  templateUrl: './BidListComponent.html'
,
styleUrls: ['./BidListComponent.css']
})
export class BidListComponent implements OnInit {
  constructor(private router: Router,  private bidListService: BidService, private formbBuilder: FormBuilder) {
    this.postGroup = formbBuilder.group({
      companyName:['',Validators.required],
      amount: ['', Validators.required],
      applyingDate: ['', Validators.required],
    });
  }
  postGroup: FormGroup;
  formValue;
  bidlists;
  arrayData;
// viewData=[this.arrayData.itemName,this.arrayData.catagory,this.arrayData.openingDate,this.arrayData.amount,
//   this.arrayData.closingDate,this.arrayData.specification]
  particularData;
  isclicked = false;
  ngOnInit() {
      this.bidListService.getListOfBids().subscribe(data => {
         this.arrayData = data[0];
         this.bidlists = data;
         console.log('bidLists' + this.bidlists);
         console.log('company' + this.arrayData.componey.location);
      });
  }
  applyBid() {
    this. formValue = this.postGroup.value;
    console.log('data of form= ' + JSON.stringify(this.formValue));
    this.bidListService.SavefBids(this.formValue)
    .subscribe(
      res => console.log(res),
      err => console.log(err));
  }
  viewDetails() {
    this.isclicked = true;
    console.log('hello');
  }
  selectedBid(post) {
this.formValue.itemName = post.itemName;
this.formValue.catagory = post.catagory;
this.formValue.companyName = post.companyName;
const token = localStorage.getItem('token');
const payload = decode(token)['subject'];
this.formValue.bidderId = payload._id;
  }
  saveAppliedBid() {
//   const formValue=this.postForm.value;
//   const token=localStorage.getItem('token');
//   const payload=decode(token)['subject']
//   formValue.componey=payload._id;
//   console.log(JSON.stringify(formValue));
//   this._biddeService.createBidde(formValue)
//   .subscribe(
//     res=> console.log(res),
//     err=> console.log(err))
//     this.postForm.reset()


  //   const formValue = this.postGroup.value;
  //   console.log('data of form= ' + JSON.stringify(formValue));
  //   this.bidListService.SaveAppliedBids(formValue)
  //   .subscribe(
  //     res => console.log(res),
  //     err => console.log(err));
   }
}
