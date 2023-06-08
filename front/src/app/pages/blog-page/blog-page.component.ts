import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogData } from 'src/app/model/page-components/dialog-data.model';
import { OkDialogComponent } from 'src/app/pages-components/ok-dialog/ok-dialog.component';

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPage implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    const dialogData: DialogData = {
      header: 'Work in progress',
      content: 'When something interesting happens, I feel the pressure to update this section of my blog with captivating content.'
    };

    const dialogRef = this.dialog.open(OkDialogComponent, {
      data: dialogData,
      // panelClass: 'blur-dialog-panel'
    });
  }

}
