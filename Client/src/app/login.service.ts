import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Router} from '@angular/router'

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

  loggedIn(){
    return !!localStorage.getItem('token')
  }

  logout(){
    localStorage.removeItem('token')
    this.router.navigate(['login'])
  }
}
