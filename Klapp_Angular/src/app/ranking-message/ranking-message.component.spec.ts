import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RankingMessageComponent } from './ranking-message.component';

describe('RankingMessageComponent', () => {
  let component: RankingMessageComponent;
  let fixture: ComponentFixture<RankingMessageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RankingMessageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RankingMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
