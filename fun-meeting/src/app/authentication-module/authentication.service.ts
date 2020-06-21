import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { pipe, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient,private _router : Router) {

   }

   private _articleApitUrl = 'http://localhost:8080/api/authenticate';
   private _httpHeaders : HttpHeaders = new HttpHeaders({"content-type":"application/json"});
   public _authSubscribtion : Subscription;
   private _token : string ;

   public authenticate(username : string,password : string){

    let _httpParams = new HttpParams().set("username",username).set("password",password);
    let token : string ;
    this._authSubscribtion = this._httpClient.post(this._articleApitUrl,{},{headers: this._httpHeaders,observe: 'response',params: _httpParams})
        .subscribe(
          respone=> {
            this._token = respone.headers.get("authorization")
            this.authenticationSuccessHandler(username);
          },
          error=>console.error(error));     
   }


  logOut() {
    sessionStorage.removeItem('username')
    sessionStorage.removeItem('token')
  }

  authenticationSuccessHandler(username : string){
    if(this._token!=undefined && this._token!=null){
      console.log("Login success")
     sessionStorage.setItem('username', username)
     sessionStorage.setItem("token",this._token)
     this._router.navigateByUrl('/quiz')
    }
  }



}
