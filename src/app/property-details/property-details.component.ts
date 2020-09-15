import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { CustomerApplicationService } from '../Services/ApplicationService';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  propertyForm:FormGroup;
  

  constructor(private customerApplicationService:CustomerApplicationService) {

      this.propertyForm=new FormGroup({
      propLocCtrl:new FormControl(null,Validators.required),
      propNameCtrl:new FormControl(null,Validators.required),
      estimatedAmtCtrl:new FormControl(null,Validators.required)
  
    })
   }

   public get propLocCtrl() {
    return this.propertyForm.get('propLocCtrl');
  }
  public get propNameCtrl() {
    return this.propertyForm.get('propNameCtrl');
  }
  public get estimatedAmtCtrl() {
    return this.propertyForm.get('estimatedAmtCtrl');
  }
  

  ngOnInit(): void {
  }

  OnSave()
  {
    
    this.customerApplicationService.customerApplication.PropertyLocation=this.propertyForm.get('propLocCtrl').value;
    this.customerApplicationService.customerApplication.PropertyName=this.propertyForm.get('propNameCtrl').value;
    this.customerApplicationService.customerApplication.EstimatedAmount=this.propertyForm.get('estimatedAmtCtrl').value;
    console.log(this.customerApplicationService.customerApplication);
   
  }

}