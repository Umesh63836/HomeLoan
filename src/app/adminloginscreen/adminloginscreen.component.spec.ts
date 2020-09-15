import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminloginscreenComponent } from './adminloginscreen.component';

describe('AdminloginscreenComponent', () => {
  let component: AdminloginscreenComponent;
  let fixture: ComponentFixture<AdminloginscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminloginscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminloginscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
