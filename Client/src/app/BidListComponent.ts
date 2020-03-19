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
const date = new Date();
this.postGroup = formbBuilder.group({
      companyName: ['', Validators.required],
      appliedDate: [ date, Validators.required],
      amount: ['', Validators.required],
    });
  }
  postGroup: FormGroup;
  formValue;
  bidlists;
  arrayData;
  selectedData = {itemName: '', catagory: '', bidderId: '', clientId: ''};
  particularData;
  isclicked = false;
  ngOnInit() {
      this.bidListService.getListOfBids().subscribe(data => {
         this.arrayData = data[0];
         this.bidlists = data;
         console.log('bidLists' + this.bidlists);
         console.log('company' + this.arrayData.componey._id);
      });
  }
  applyForBid() {
    alert('Aha');
    this. formValue = this.postGroup.value;
    this.formValue.itemName = this.selectedData.itemName;
    this.formValue.catagory = this.selectedData.catagory;
    this.formValue.clientId = this.selectedData.clientId;

    console.log('data of form= ' + JSON.stringify(this.formValue));
    this.bidListService.SaveAppliedBids(this.formValue)
    .subscribe(
      res => console.log(res),
      err => console.log(err));
  }
  viewDetails() {
    this.isclicked = true;
    console.log('hello');
  }
  selectedBid(post) {
    this.selectedData.itemName = post.itemName;
    this.selectedData.catagory = post.catagory;
    this.selectedData.clientId = this.arrayData.componey._id;
    this.formValue.companyName = post.companyName;
    const token = localStorage.getItem('token');
    const payload = decode(token)['subject'];
    this.selectedData.bidderId = payload._id;
  }
  saveAppliedBid() {


   }
}
