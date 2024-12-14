import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoMediaAlunosComponent } from './grafico-media-alunos.component';

describe('GraficoMediaAlunosComponent', () => {
  let component: GraficoMediaAlunosComponent;
  let fixture: ComponentFixture<GraficoMediaAlunosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GraficoMediaAlunosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GraficoMediaAlunosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
