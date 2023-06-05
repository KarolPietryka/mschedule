import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Tail } from './tail/tail.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { SquareStoryLineComponent } from './square-story/square-story.component';



@NgModule({
  exports: [
    Tail,
    SquareStoryLineComponent
  ],
  declarations: [
    Tail,
    SquareStoryLineComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule 
  ]
})
export class PagesComponentsModule { }
