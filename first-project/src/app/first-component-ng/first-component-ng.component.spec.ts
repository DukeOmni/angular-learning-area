import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstComponentNgComponent } from './first-component-ng.component';

describe('FirstComponentNgComponent', () => {
  let component: FirstComponentNgComponent;
  let fixture: ComponentFixture<FirstComponentNgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstComponentNgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstComponentNgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
