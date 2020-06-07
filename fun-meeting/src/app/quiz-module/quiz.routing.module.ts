import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  { path: "", component: QuizComponent},
  {
    path: "articles",
    loadChildren : ()=> import('./article-module/article.module').then(m=>m.ArticleModule)
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class QuizRoutingModule { }
