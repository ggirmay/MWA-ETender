import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'
import * as decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  getToken() {
    return localStorage.getItem('token');
  }

  constructor(private http: HttpClient, private router:Router) { }

  logClient(user){
    console.log('in client login');
    
    return this.http.post<any>('http://localhost:3000/login/', user);
    
  }

  clientType(){
    const data=localStorage.getItem('token'); 
        const payload=decode(data)['subject']
        console.log(payload.type=='client');
        return(payload.type=='client')

  }

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
