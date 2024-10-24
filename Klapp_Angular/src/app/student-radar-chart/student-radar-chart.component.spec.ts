import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentRadarChartComponent } from './student-radar-chart.component';

describe('StudentRadarChartComponent', () => {
  let component: StudentRadarChartComponent;
  let fixture: ComponentFixture<StudentRadarChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentRadarChartComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StudentRadarChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
