import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingCompletaComponent } from './landing-completa.component';

describe('LandingCompletaComponent', () => {
  let component: LandingCompletaComponent;
  let fixture: ComponentFixture<LandingCompletaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LandingCompletaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LandingCompletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
