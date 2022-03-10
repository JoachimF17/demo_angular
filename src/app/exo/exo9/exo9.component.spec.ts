import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo9Component } from './exo9.component';

describe('Exo9Component', () => {
  let component: Exo9Component;
  let fixture: ComponentFixture<Exo9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
