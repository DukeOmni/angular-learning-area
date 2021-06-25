import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StylebidingComponent } from './stylebiding.component';

describe('StylebidingComponent', () => {
  let component: StylebidingComponent;
  let fixture: ComponentFixture<StylebidingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylebidingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StylebidingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
