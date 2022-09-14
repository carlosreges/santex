import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCabezaComponent } from './admin-cabeza.component';

describe('AdminCabezaComponent', () => {
  let component: AdminCabezaComponent;
  let fixture: ComponentFixture<AdminCabezaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCabezaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCabezaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
