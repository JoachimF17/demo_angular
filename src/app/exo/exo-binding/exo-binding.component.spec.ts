import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExoBindingComponent } from './exo-binding.component';

describe('ExoBindingComponent', () => {
  let component: ExoBindingComponent;
  let fixture: ComponentFixture<ExoBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExoBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExoBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
