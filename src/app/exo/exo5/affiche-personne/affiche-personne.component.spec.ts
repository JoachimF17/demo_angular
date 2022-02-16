import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffichePersonneComponent } from './affiche-personne.component';

describe('AffichePersonneComponent', () => {
  let component: AffichePersonneComponent;
  let fixture: ComponentFixture<AffichePersonneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffichePersonneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffichePersonneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
