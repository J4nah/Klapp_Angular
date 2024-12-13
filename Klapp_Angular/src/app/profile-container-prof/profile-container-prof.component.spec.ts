import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileContainerProfComponent } from './profile-container-prof.component';

describe('ProfileContainerProfComponent', () => {
  let component: ProfileContainerProfComponent;
  let fixture: ComponentFixture<ProfileContainerProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileContainerProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileContainerProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
