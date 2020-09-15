import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eligiblity-calculator',
  templateUrl: './eligiblity-calculator.component.html',
  styleUrls: ['./eligiblity-calculator.component.css']
})
export class EligiblityCalculatorComponent implements OnInit {

  public salary:number;
  public interest:number;
  public LoanAmount:number;
  public tempVar:number;
  public tempVar2:number;
  constructor() { }

  ngOnInit(): void {
  }
  calEligibility()
  {
    this.tempVar=(Math.pow((this.interest+1),30)-1);
    this.tempVar2=this.interest*(Math.pow((this.interest+1),30));
    this.LoanAmount=Math.round(this.salary*(this.tempVar/this.tempVar2)*(100000/805));
  }
}
