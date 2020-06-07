import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ArticleUpdateFormComponent } from './article-update-form.component';

describe('ArticleFormComponent', () => {
  let component: ArticleUpdateFormComponent;
  let fixture: ComponentFixture<ArticleUpdateFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticleUpdateFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleUpdateFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
