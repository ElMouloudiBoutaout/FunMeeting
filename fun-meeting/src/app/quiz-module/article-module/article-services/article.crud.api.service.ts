import { Observable } from "rxjs";

export interface IArticleCrudApi {

    retrieveAllArticles() : Observable<Array<Article>>

    DeleteArticle(articleId : string) : void

    updateArticle(article : Article) : Observable<Article>

    addNewArticle(article : Article) : Observable<Article>

}

export class Article{

    id : number

    answer : string

    question : string

    propositions : Array<Proposition> ;

    constructor(id : number,question : string,answer : string,propositions : Array<Proposition>){
        this.id = id;
        this.answer = answer;
        this.question=question;
        this.propositions=propositions;
    }



}

class Proposition {

    proposition : string

}