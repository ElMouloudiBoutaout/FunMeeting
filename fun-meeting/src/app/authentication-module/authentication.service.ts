import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private _httpClient: HttpClient) {

   }

   private _articleApitUrl = 'http://localhost:8080/api/authenticate';
   private _httpHeaders : HttpHeaders = new HttpHeaders({"content-type":"application/json"});

   public authenticate(username : string,password : string) : boolean{

    let _httpParams = new HttpParams().set("username",username).set("password",password);

    let token : string = "";

    this._httpClient.post(this._articleApitUrl,{},{headers: this._httpHeaders,observe: 'response',params: _httpParams})
        .subscribe(respone=> token = respone.headers.get('Authorization'),
                    error=>console.error(error));

      console.log(token!=undefined && token!=null)       
                    
      return token!=undefined && token!=null;
   }





}
