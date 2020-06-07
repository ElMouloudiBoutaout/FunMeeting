import {IArticleCrudApi, Article} from './article.crud.api.service'
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
  })
export class ArticleCrudApi implements IArticleCrudApi {


    private _articleApitUrl = 'http://localhost:8080/api/v1/articles';
    private _httpHeaders : HttpHeaders = new HttpHeaders({"content-type":"application/json","Authorization": 'Basic ' + btoa('user:password')});



    constructor(private _httpClient: HttpClient){}

    retrieveAllArticles(): Observable<Article[]> {
        return this._httpClient.get<Article[]>(this._articleApitUrl,{headers: this._httpHeaders})
    }

    DeleteArticle(articleId : string): Observable<any> {
        return this._httpClient.delete(this._articleApitUrl.concat("/").concat(articleId))
    }

    updateArticle(article : Article): Observable<Article> {
        return this._httpClient.put<Article>(this._articleApitUrl,article,{headers: this._httpHeaders})
    }

    addNewArticle(article : Article): Observable<Article> {
        return this._httpClient.post<Article>(this._articleApitUrl,article,{headers: this._httpHeaders})
    }

}