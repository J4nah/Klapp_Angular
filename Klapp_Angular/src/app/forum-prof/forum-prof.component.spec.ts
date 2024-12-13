import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForumProfComponent } from './forum-prof.component';

describe('ForumProfComponent', () => {
  let component: ForumProfComponent;
  let fixture: ComponentFixture<ForumProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ForumProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ForumProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
