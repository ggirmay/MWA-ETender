import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { }

  regClient(user){
    console.log('in create bidde');
    
    return this.http.post('http://localhost:3000/register/', user);
    
  }
}