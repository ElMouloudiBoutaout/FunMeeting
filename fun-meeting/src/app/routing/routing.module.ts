import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuizModule } from '../quiz-module/quiz.module';
import { AppComponent } from '../app.component';

export const appRouteList: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'quiz',
    loadChildren: () => import('../quiz-module/quiz.routing.module').then(m => m.QuizRoutingModule),
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuizModule,
    RouterModule.forRoot(appRouteList)
  ],
  exports : [RouterModule]
})
export class RoutingModule { }
