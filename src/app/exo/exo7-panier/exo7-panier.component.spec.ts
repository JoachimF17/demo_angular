import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Exo7PanierComponent } from './exo7-panier.component';

describe('Exo7PanierComponent', () => {
  let component: Exo7PanierComponent;
  let fixture: ComponentFixture<Exo7PanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Exo7PanierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Exo7PanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
