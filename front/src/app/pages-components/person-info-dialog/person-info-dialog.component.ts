import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'person-info-dialog',
  templateUrl: './person-info-dialog.component.html',
  styleUrls: ['./person-info-dialog.component.scss']
})
export class PersonInfoDialog implements OnInit {

  constructor(private dialogRef: MatDialogRef<PersonInfoDialog>) { }

  ngOnInit(): void {
  }

  onOkClick(): void {
    this.dialogRef.close(); 
  }
}
