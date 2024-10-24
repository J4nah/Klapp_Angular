import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideEstilosAprendizagemComponent } from './right-side-estilos-aprendizagem.component';

describe('RightSideEstilosAprendizagemComponent', () => {
  let component: RightSideEstilosAprendizagemComponent;
  let fixture: ComponentFixture<RightSideEstilosAprendizagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RightSideEstilosAprendizagemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RightSideEstilosAprendizagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
