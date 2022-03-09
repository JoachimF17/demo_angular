import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo8Component } from './exo8.component';

describe('Exo8Component', () => {
  let component: Exo8Component;
  let fixture: ComponentFixture<Exo8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
