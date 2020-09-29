import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccountViewComponent } from './profile-account-view.component';

describe('ProfileAccountViewComponent', () => {
  let component: ProfileAccountViewComponent;
  let fixture: ComponentFixture<ProfileAccountViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAccountViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAccountViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
