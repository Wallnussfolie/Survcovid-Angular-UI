import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityDefinitionsComponent } from './activity-definitions.component';

describe('ActivityDefinitionsComponent', () => {
  let component: ActivityDefinitionsComponent;
  let fixture: ComponentFixture<ActivityDefinitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityDefinitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityDefinitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
