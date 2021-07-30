import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipesExemplesComponent } from './pipes-exemples.component';

describe('PipesExemplesComponent', () => {
  let component: PipesExemplesComponent;
  let fixture: ComponentFixture<PipesExemplesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipesExemplesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipesExemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
