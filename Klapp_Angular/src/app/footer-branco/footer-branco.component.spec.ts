import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBrancoComponent } from './footer-branco.component';

describe('FooterBrancoComponent', () => {
  let component: FooterBrancoComponent;
  let fixture: ComponentFixture<FooterBrancoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FooterBrancoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FooterBrancoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
