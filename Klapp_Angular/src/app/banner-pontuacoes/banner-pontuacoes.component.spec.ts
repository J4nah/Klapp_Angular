import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerPontuacoesComponent } from './banner-pontuacoes.component';

describe('BannerPontuacoesComponent', () => {
  let component: BannerPontuacoesComponent;
  let fixture: ComponentFixture<BannerPontuacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BannerPontuacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BannerPontuacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
