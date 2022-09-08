import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumCarritoComponent } from './resum-carrito.component';

describe('ResumCarritoComponent', () => {
  let component: ResumCarritoComponent;
  let fixture: ComponentFixture<ResumCarritoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResumCarritoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
