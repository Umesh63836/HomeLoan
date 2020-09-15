import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminshowloanComponent } from './adminshowloan.component';

describe('AdminshowloanComponent', () => {
  let component: AdminshowloanComponent;
  let fixture: ComponentFixture<AdminshowloanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminshowloanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminshowloanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
