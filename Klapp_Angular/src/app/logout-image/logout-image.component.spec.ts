import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutImageComponent } from './logout-image.component';

describe('LogoutImageComponent', () => {
  let component: LogoutImageComponent;
  let fixture: ComponentFixture<LogoutImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoutImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LogoutImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
