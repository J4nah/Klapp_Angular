import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EducacaoParaTodosComponent } from './educacao-para-todos.component';

describe('EducacaoParaTodosComponent', () => {
  let component: EducacaoParaTodosComponent;
  let fixture: ComponentFixture<EducacaoParaTodosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EducacaoParaTodosComponent]
    })
    .compileComponents();
    fixture = TestBed.createComponent(EducacaoParaTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
