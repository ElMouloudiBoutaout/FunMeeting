import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Article } from '../article-services/article.crud.api.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ArticleCrudApi } from '../article-services/article.crud.api.service.impl';

@Component({
  templateUrl: './article-update-form.component.html',
  styleUrls: ['./article-update-form.component.css']
})
export class ArticleUpdateFormComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ArticleUpdateFormComponent>,
    @Inject(MAT_DIALOG_DATA) public article: Article,
    private formBuilder: FormBuilder,
    private articleCrudApi : ArticleCrudApi
  ) { }

  public articleForm: FormGroup;

  ngOnInit(): void {
    console.log(this.article)
    this.articleForm = this.formBuilder.group({
      question: [this.article.question,Validators.required],
      answer: [this.article.answer,Validators.required],
      proposition1: [this.article.propositions[0].proposition,Validators.required],
      proposition2: [this.article.propositions[1].proposition,Validators.required],
      proposition3: [this.article.propositions[2].proposition,Validators.required],
    });
  }

  confirm(){
    let _article = new Article(
      this.article.id,
      this.articleForm.value.question,
      this.articleForm.value.answer,
      [this.articleForm.value.proposition1,this.articleForm.value.proposition2,this.articleForm.value.proposition3]);
    
    this.articleCrudApi.updateArticle(_article)
        .subscribe(
          article=> console.log(article),
          err=>console.log(err),
          ()=>this.dialogRef.close()
        )
  }

  cancel(){
    console.log("close Modal")
    this.dialogRef.close()
  }




}
