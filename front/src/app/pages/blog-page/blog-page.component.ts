import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OkDialogComponent } from 'src/app/pages-components/ok-dialog/ok-dialog.component';

@Component({
  selector: 'blog-page',
  templateUrl: './blog-page.component.html',
  styleUrls: ['./blog-page.component.scss']
})
export class BlogPage implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
    this.dialog.open(OkDialogComponent, {
      panelClass: 'blur-dialog-panel'
    });
  }

}
