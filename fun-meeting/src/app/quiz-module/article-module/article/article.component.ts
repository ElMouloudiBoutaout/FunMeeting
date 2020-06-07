import { Component, OnInit, ViewChild } from '@angular/core';
import { ArticleCrudApi } from '../article-services/article.crud.api.service.impl';
import { Article } from '../article-services/article.crud.api.service';
import {settings} from '../configurations/smart.table.settings'
import { MatDialog } from '@angular/material/dialog';
import { ArticleUpdateFormComponent } from '../article-update-form/article-update-form.component';
import { ArticleAddFormComponent } from '../article-add-form/article-add-form.component';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

 
constructor(private articleCrudApi : ArticleCrudApi,public dialog: MatDialog) { }

_settings = settings;

private _articles : Array<Article>;

@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
dataSource : MatTableDataSource<Article>;


get articles(): Array<Article> {
      return this._articles;
    }

displayedColumns: string[] = ['question','answer','proposition1','proposition2','proposition3','operations'];


isLoadingData : Boolean = true;

ngOnInit(): void {
  console.log(this.paginator)
    this.articleCrudApi.retrieveAllArticles().
    subscribe(
      articles =>  {
        this._articles = articles
      },
      err => console.error(err),
      ()=>{
        this.isLoadingData = false
        this.dataSource = new MatTableDataSource<Article>(this._articles)
        this.dataSource.paginator=this.paginator
      })

      console.log(this.paginator)
  }

  public deleteArticle(articleId : number){
    this.articleCrudApi.
              DeleteArticle(articleId.toString())
              .subscribe(
               ()=> console.info("Deleting Article"),
               err =>console.error(err),
               ()=>{
                 console.info("Article Deleted")
                 this._articles.push(
                 this._articles.find(article=>article.id==articleId))
                })
  }

  public updateArticle( _article : Article){
    this.dialog.open(ArticleUpdateFormComponent, {
      height: '500px',
      width: '600px',
      data: _article
    });
  }

  public addNewArticle(){
    this.dialog.open(ArticleAddFormComponent, {
      height: '500px',
      width: '600px',
    });
  }


}
