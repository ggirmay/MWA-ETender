import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { of, Observable } from 'rxjs';
import { IBidModel } from './Models/BidModel';
@Injectable({
  providedIn: 'root'
})
export class BidService  {

 constructor(private http: HttpClient) { }

 postBid(bid) {
   return this.http.post('http://localhost:3000/postBid', bid);

 }
 getListOfBids() {
   return this.http.get('http://localhost:3000/bid');
 }

 SavefBids(data) {
  return this.http.post('http://localhost:3000/applyBid', data);
}
SaveAppliedBids(receivedBid) {
  return this.http.post('http://localhost:3000/bidReceived', receivedBid);
}


getWinner() {
  return this.http.get('http://localhost:3000/winner');
}
}
