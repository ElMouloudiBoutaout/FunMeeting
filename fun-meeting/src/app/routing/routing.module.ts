import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { QuizModule } from '../quiz-module/quiz.module';
import { AuthGuard } from '../authentication-module/guards/auth-guard.guard';

export const appRouteList: Routes = [
  {
    path: 'quiz',
    loadChildren: () => import('../quiz-module/quiz.routing.module').then(m => m.QuizRoutingModule),
    canActivate : [AuthGuard]
  },
  {
    path: '',
    loadChildren: () => import('../authentication-module/authentication.module').then(m => m.AuthenticationModule),
  },
  {
    path: '',
    redirectTo: 'login',
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
