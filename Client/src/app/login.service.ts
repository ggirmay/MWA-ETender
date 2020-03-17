import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  logClient(user){
    console.log('in client login');
    
    return this.http.post('http://localhost:3000/login/', user);
    
  }

  loggedIn(){

    return !!localStorage.getItem('token')
  }
}
