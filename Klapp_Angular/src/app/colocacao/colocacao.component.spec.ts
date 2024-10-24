import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColocacaoComponent } from './colocacao.component';

describe('ColocacaoComponent', () => {
  let component: ColocacaoComponent;
  let fixture: ComponentFixture<ColocacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ColocacaoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ColocacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
