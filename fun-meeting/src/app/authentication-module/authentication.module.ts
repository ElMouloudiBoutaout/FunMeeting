import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './authentication/authentication.component';
import { Routes, RouterModule } from '@angular/router';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { LogoutComponent } from './logout/logout.component';


const routes : Routes = [
  {
    path: "login", 
    component: AuthenticationComponent 
  },
  {
  path: "logout", 
  component: LogoutComponent 
  }
]


@NgModule({
  declarations: [AuthenticationComponent, LogoutComponent],
  imports: [
    CommonModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule.forChild(routes)
  ]
})
export class AuthenticationModule { }
