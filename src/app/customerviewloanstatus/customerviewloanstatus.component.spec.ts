import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewloanstatusComponent } from './customerviewloanstatus.component';

describe('CustomerviewloanstatusComponent', () => {
  let component: CustomerviewloanstatusComponent;
  let fixture: ComponentFixture<CustomerviewloanstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerviewloanstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewloanstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
