import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentQuizzes01Component } from './student-quizzes01.component';

describe('StudentQuizzes01Component', () => {
  let component: StudentQuizzes01Component;
  let fixture: ComponentFixture<StudentQuizzes01Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentQuizzes01Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentQuizzes01Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
