import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelaAlunoComponent } from './tela-aluno.component';

describe('TelaAlunoComponent', () => {
  let component: TelaAlunoComponent;
  let fixture: ComponentFixture<TelaAlunoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TelaAlunoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TelaAlunoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
