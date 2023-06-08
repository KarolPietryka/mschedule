import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonInfoData } from 'src/app/model/person/person-info-data.model';

@Component({
  selector: 'person-info-dialog',
  templateUrl: './person-info-dialog.component.html',
  styleUrls: ['./person-info-dialog.component.scss']
})
export class PersonInfoDialog implements OnInit {

  showCopiedMessage: boolean = false;
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public personInfo: PersonInfoData,
    private dialogRef: MatDialogRef<PersonInfoDialog>) { }

  ngOnInit(): void {
  }

  onOkClick(): void {
    this.dialogRef.close(); 
  }

  copyToClipboard(text: string): void {
    navigator.clipboard.writeText(text).then(() => {
      this.showCopiedMessage = true;
      setTimeout(() => {
          this.showCopiedMessage = false;
      }, 1000); // Display "Copied" message for 1 second (1000 milliseconds)
    });
  }
}
