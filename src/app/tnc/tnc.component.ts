import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { CustomerApplicationService } from '../Services/ApplicationService';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tnc',
  templateUrl: './tnc.component.html',
  styleUrls: ['./tnc.component.css']
})
export class TncComponent {
  application;
  // checked: boolean = false;
  constructor(public dialogRef: MatDialogRef<TncComponent>) { }

  close() {
    this.dialogRef.close();
  } 

 

  

    
  

}

