import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosPrivateComponent } from './cursos-private.component';

describe('CursosPrivateComponent', () => {
  let component: CursosPrivateComponent;
  let fixture: ComponentFixture<CursosPrivateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CursosPrivateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosPrivateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
