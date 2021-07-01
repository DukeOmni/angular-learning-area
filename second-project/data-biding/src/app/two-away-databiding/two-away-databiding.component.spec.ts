import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoAwayDatabidingComponent } from './two-away-databiding.component';

describe('TwoAwayDatabidingComponent', () => {
  let component: TwoAwayDatabidingComponent;
  let fixture: ComponentFixture<TwoAwayDatabidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwoAwayDatabidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwoAwayDatabidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
