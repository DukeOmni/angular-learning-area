import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudantsDetailComponent } from './studants-detail.component';

describe('StudantsDetailComponent', () => {
  let component: StudantsDetailComponent;
  let fixture: ComponentFixture<StudantsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudantsDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudantsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
