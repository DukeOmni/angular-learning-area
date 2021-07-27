import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossServiceComponent } from './cross-service.component';

describe('CrossServiceComponent', () => {
  let component: CrossServiceComponent;
  let fixture: ComponentFixture<CrossServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrossServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
