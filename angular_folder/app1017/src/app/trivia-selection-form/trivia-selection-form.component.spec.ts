import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TriviaSelectionFormComponent } from './trivia-selection-form.component';

describe('TriviaSelectionFormComponent', () => {
  let component: TriviaSelectionFormComponent;
  let fixture: ComponentFixture<TriviaSelectionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TriviaSelectionFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TriviaSelectionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
