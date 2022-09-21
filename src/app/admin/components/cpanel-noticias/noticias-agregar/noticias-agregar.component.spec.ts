import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasAgregarComponent } from './noticias-agregar.component';

describe('NoticiasAgregarComponent', () => {
  let component: NoticiasAgregarComponent;
  let fixture: ComponentFixture<NoticiasAgregarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasAgregarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
