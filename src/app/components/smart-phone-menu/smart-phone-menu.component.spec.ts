import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmartPhoneMenuComponent } from './smart-phone-menu.component';

describe('SmartPhoneMenuComponent', () => {
  let component: SmartPhoneMenuComponent;
  let fixture: ComponentFixture<SmartPhoneMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmartPhoneMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmartPhoneMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
