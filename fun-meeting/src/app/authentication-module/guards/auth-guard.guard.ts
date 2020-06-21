import { Injectable, Inject } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivateChild, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth :  AuthenticationService,private _router: Router,){}

  canActivate(next: ActivatedRouteSnapshot,state: RouterStateSnapshot) : Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let isAuthenticated : boolean = sessionStorage.getItem("username")!=null;

    if(!isAuthenticated){
      this._router.navigate(["/login"]);
      return false;
    }

    return true;
  }
  
}
