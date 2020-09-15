import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowappComponent } from './adminshowapp.component';

describe('AdminshowappComponent', () => {
  let component: AdminshowappComponent;
  let fixture: ComponentFixture<AdminshowappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminshowappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
