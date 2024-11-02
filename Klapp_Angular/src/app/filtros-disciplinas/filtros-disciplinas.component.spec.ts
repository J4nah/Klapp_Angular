import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosDisciplinasComponent } from './filtros-disciplinas.component';

describe('FiltrosDisciplinasComponent', () => {
  let component: FiltrosDisciplinasComponent;
  let fixture: ComponentFixture<FiltrosDisciplinasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FiltrosDisciplinasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FiltrosDisciplinasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
