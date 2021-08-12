import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesDetalComponent } from './courses-detal.component';

describe('CoursesDetalComponent', () => {
  let component: CoursesDetalComponent;
  let fixture: ComponentFixture<CoursesDetalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursesDetalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesDetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
