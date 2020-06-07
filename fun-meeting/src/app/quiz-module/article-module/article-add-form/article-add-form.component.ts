import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ArticleUpdateFormComponent } from '../article-update-form/article-update-form.component';
import { Article } from '../article-services/article.crud.api.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArticleCrudApi } from '../article-services/article.crud.api.service.impl';

@Component({
  selector: 'app-article-add-form',
  templateUrl: './article-add-form.component.html',
  styleUrls: ['./article-add-form.component.css']
})
export class ArticleAddFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ArticleUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public article: Article,
    private formBuilder: FormBuilder,
    private articleCrudApi : ArticleCrudApi) { }

    public articleForm: FormGroup;

  ngOnInit(): void {
    this.articleForm = this.formBuilder.group({
      question: ['',Validators.required],
      answer: ['',Validators.required],
      proposition1: ['',Validators.required],
      proposition2: ['',Validators.required],
      proposition3: ['',Validators.required],
    });
  }

  confirm(){
    let _article = new Article(
      null,
      this.articleForm.value.question,
      this.articleForm.value.answer,
      [this.articleForm.value.proposition1,this.articleForm.value.proposition2,this.articleForm.value.proposition3]);
    
    this.articleCrudApi.addNewArticle(_article)
        .subscribe(
          article=> console.log(article),
          err=>console.log(err),
          ()=>this.dialogRef.close()
        )
  }

  cancel(){
    this.dialogRef.close()
  }

}
