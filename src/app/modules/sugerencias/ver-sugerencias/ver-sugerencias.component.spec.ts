import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSugerenciasComponent } from './view-sugerencias.component';

describe('VerSugerenciasComponent', () => {
  let component: ViewSugerenciasComponent;
  let fixture: ComponentFixture<ViewSugerenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSugerenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSugerenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
