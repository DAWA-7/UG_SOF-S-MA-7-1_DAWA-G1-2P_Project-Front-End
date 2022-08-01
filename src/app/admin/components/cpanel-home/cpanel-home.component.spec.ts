import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CPanelHomeComponent } from './cpanel-home.component';

describe('CPanelHomeComponent', () => {
  let component: CPanelHomeComponent;
  let fixture: ComponentFixture<CPanelHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CPanelHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CPanelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
