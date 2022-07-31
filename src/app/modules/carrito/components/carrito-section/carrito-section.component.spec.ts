import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoSectionComponent } from './carrito-section.component';

describe('CarritoSectionComponent', () => {
  let component: CarritoSectionComponent;
  let fixture: ComponentFixture<CarritoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoSectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarritoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
