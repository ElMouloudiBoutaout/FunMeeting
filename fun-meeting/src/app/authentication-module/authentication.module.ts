import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Routes, RouterModule } from '@angular/router';


const routes : Routes = [
  {
    path: "", 
    component: AuthenticationComponent 
  }
]


@NgModule({
  declarations: [AuthenticationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }