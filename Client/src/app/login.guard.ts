import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private _loginService:LoginService, private _router : Router) {  
  // canActivate(
  //   next: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
  //   return true;
  }
  canActivate() : boolean {
    if(this._loginService.loggedIn()) {
    return true
  } else {
    this._router.navigate(['./login'])
    return false  
     }
  }
}
