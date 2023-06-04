import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tail } from './tail/tail.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  exports: [
    Tail
  ],
  declarations: [
    Tail
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesComponentsModule { }
