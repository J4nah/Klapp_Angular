import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaQuizComponent } from './tela-quiz.component';

describe('TelaQuizComponent', () => {
  let component: TelaQuizComponent;
  let fixture: ComponentFixture<TelaQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TelaQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
