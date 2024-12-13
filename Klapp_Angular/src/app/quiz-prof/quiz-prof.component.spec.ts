import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizProfComponent } from './quiz-prof.component';

describe('QuizProfComponent', () => {
  let component: QuizProfComponent;
  let fixture: ComponentFixture<QuizProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuizProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
