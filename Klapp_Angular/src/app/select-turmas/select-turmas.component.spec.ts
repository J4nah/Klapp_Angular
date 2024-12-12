import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTurmasComponent } from './select-turmas.component';

describe('SelectTurmasComponent', () => {
  let component: SelectTurmasComponent;
  let fixture: ComponentFixture<SelectTurmasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SelectTurmasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SelectTurmasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
