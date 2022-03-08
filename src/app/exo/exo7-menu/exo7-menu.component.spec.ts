import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo7MenuComponent } from './exo7-menu.component';

describe('Exo7MenuComponent', () => {
  let component: Exo7MenuComponent;
  let fixture: ComponentFixture<Exo7MenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo7MenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo7MenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
