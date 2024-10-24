import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProgressLineChartComponent } from './student-progress-line-chart.component';

describe('StudentProgressLineChartComponent', () => {
  let component: StudentProgressLineChartComponent;
  let fixture: ComponentFixture<StudentProgressLineChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentProgressLineChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentProgressLineChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
