import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EligiblityCalculatorComponent } from './eligiblity-calculator.component';

describe('EligiblityCalculatorComponent', () => {
  let component: EligiblityCalculatorComponent;
  let fixture: ComponentFixture<EligiblityCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EligiblityCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EligiblityCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
