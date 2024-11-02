import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesScrollComponent } from './messages-scroll.component';

describe('MessagesScrollComponent', () => {
  let component: MessagesScrollComponent;
  let fixture: ComponentFixture<MessagesScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MessagesScrollComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MessagesScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
