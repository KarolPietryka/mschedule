import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tail } from './tail/tail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';



@NgModule({
  exports: [
    Tail
  ],
  declarations: [
    Tail
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule 
  ]
})
export class PagesComponentsModule { }
