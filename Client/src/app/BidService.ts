import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BidService  {

 constructor(private http: HttpClient) { }

 postBid(bid){
   return this.http.post('http://localhost:3000/postBid', bid);

 }
}
