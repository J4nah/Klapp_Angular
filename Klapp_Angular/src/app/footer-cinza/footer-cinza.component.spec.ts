import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterCinzaComponent } from './footer-cinza.component';

describe('FooterCinzaComponent', () => {
  let component: FooterCinzaComponent;
  let fixture: ComponentFixture<FooterCinzaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterCinzaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterCinzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
