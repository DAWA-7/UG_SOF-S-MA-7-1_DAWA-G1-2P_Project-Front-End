import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiasListarComponent } from './noticias-listar.component';

describe('NoticiasListarComponent', () => {
  let component: NoticiasListarComponent;
  let fixture: ComponentFixture<NoticiasListarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoticiasListarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoticiasListarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
