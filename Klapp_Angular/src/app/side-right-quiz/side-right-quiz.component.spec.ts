import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideRightQuizComponent } from './side-right-quiz.component';

describe('SideRightQuizComponent', () => {
  let component: SideRightQuizComponent;
  let fixture: ComponentFixture<SideRightQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideRightQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideRightQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
