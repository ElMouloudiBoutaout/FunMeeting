import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz/quiz.component'; // CLI imports router
import { ArticleModule } from './article-module/article.module';


@NgModule({
  declarations: [QuizComponent],
  imports: [
    ArticleModule
  ]
})
export class QuizModule { }
