import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCuerpoComponent } from './admin-cuerpo.component';

describe('AdminCuerpoComponent', () => {
  let component: AdminCuerpoComponent;
  let fixture: ComponentFixture<AdminCuerpoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminCuerpoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminCuerpoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
