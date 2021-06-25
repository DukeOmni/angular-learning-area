import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventbidingComponent } from './eventbiding.component';

describe('EventbidingComponent', () => {
  let component: EventbidingComponent;
  let fixture: ComponentFixture<EventbidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventbidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventbidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
