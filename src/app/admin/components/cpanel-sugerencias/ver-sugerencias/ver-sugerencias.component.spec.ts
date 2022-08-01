import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerSugerenciasComponent } from './ver-sugerencias.component';

describe('VerSugerenciasComponent', () => {
  let component: VerSugerenciasComponent;
  let fixture: ComponentFixture<VerSugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerSugerenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
