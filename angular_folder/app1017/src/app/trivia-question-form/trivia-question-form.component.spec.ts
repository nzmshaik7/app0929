import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaQuestionFormComponent } from './trivia-question-form.component';

describe('TriviaQuestionFormComponent', () => {
  let component: TriviaQuestionFormComponent;
  let fixture: ComponentFixture<TriviaQuestionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriviaQuestionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriviaQuestionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
