import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileGameViewComponent } from './profile-game-view.component';

describe('ProfileGameViewComponent', () => {
  let component: ProfileGameViewComponent;
  let fixture: ComponentFixture<ProfileGameViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileGameViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileGameViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
