import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EMICalculatorComponent } from './emicalculator.component';

describe('EMICalculatorComponent', () => {
  let component: EMICalculatorComponent;
  let fixture: ComponentFixture<EMICalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EMICalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EMICalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});