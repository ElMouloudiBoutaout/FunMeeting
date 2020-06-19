import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz/quiz.component';
import { ArticleComponent } from './article-module/article/article.component';
import { AuthGuard } from '../authentication-module/guards/auth-guard.guard';

const routes: Routes = [
  { path: "", component: QuizComponent},
  {
    path: "articles", 
    component: ArticleComponent ,
    //canActivate :  [AuthGuard] 
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
