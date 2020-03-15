import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { filter } from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class BidService  {
 constructor(private http: HttpClient  ) {
 }
 getOnlineData() {
  return this.http.get('https://randomuser.me/api/?results=10')
  .subscribe(res => {localStorage.setItem('data',
  JSON.stringify(JSON.parse(JSON.stringify(res)).results)); } );
  }
getCachedData() {
const localData = of(JSON.parse(localStorage.getItem('data')));
console.log(localData)
return localData;
  }
  getUserDetails(uuid) {
    const allUsers = JSON.parse(localStorage.getItem('data'));
    return of(allUsers.filter(user => user.login.uuid == uuid));
  }
  checkUserPresence(uuid) {
    const allUsers = JSON.parse(localStorage.getItem('data'));
    return allUsers.filter(user => user.login.uuid == uuid).length > 0;
  }

}
