import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAddFormComponent } from './article-add-form.component';

describe('ArticleAddFormComponent', () => {
  let component: ArticleAddFormComponent;
  let fixture: ComponentFixture<ArticleAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
