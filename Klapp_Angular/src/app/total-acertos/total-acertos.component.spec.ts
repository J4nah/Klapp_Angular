import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalAcertosComponent } from './total-acertos.component';

describe('TotalAcertosComponent', () => {
  let component: TotalAcertosComponent;
  let fixture: ComponentFixture<TotalAcertosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TotalAcertosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TotalAcertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
