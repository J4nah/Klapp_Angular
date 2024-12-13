import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideMenuProfComponent } from './side-menu-prof.component';

describe('SideMenuProfComponent', () => {
  let component: SideMenuProfComponent;
  let fixture: ComponentFixture<SideMenuProfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SideMenuProfComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SideMenuProfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
