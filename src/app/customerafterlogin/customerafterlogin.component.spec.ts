import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerafterloginComponent } from './customerafterlogin.component';

describe('CustomerafterloginComponent', () => {
  let component: CustomerafterloginComponent;
  let fixture: ComponentFixture<CustomerafterloginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerafterloginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerafterloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
