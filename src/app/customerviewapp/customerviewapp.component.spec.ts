import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerviewappComponent } from './customerviewapp.component';

describe('CustomerviewappComponent', () => {
  let component: CustomerviewappComponent;
  let fixture: ComponentFixture<CustomerviewappComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerviewappComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerviewappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
