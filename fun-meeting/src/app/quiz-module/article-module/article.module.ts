import { NgModule } from '@angular/core';
import { ArticleComponent } from './article/article.component';
import { Routes, RouterModule } from '@angular/router';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import { ArticleUpdateFormComponent } from './article-update-form/article-update-form.component';
import { ArticleAddFormComponent } from './article-add-form/article-add-form.component';
import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';


const routes : Routes = [
  {
    path: "articles", 
    component: ArticleComponent 
  }
]

@NgModule({
  declarations: [ArticleComponent, ArticleUpdateFormComponent, ArticleAddFormComponent],
  imports: [
    MatProgressBarModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatInputModule,
    MatDialogModule,
    MatCardModule,
    MatPaginatorModule,
    //RouterModule.forChild(routes)
  ]
})
export class ArticleModule { }
