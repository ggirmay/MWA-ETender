import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegService {

  constructor(private http: HttpClient) { }

  regClient(user){
    console.log('value forwarded to back end');
    
    return this.http.post<any>('http://localhost:3000/register/', user);
    
  }
}
