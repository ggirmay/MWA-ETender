import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class BiddeService {

  constructor(private http: HttpClient) { }

  createBidde(bidde){
    console.log('in create bidde');
    
    return this.http.post('http://localhost:3000/bidde/', bidde);
    
  }
}
