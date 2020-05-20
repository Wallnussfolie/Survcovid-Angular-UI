import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartWatchComponent } from './smart-watch.component';

describe('SmartWatchComponent', () => {
  let component: SmartWatchComponent;
  let fixture: ComponentFixture<SmartWatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartWatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartWatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
