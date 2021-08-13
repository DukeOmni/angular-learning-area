import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantsFormComponent } from './studants-form.component';

describe('StudantsFormComponent', () => {
  let component: StudantsFormComponent;
  let fixture: ComponentFixture<StudantsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudantsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudantsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
