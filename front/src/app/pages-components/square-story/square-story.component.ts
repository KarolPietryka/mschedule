import { Component, Input, OnInit } from '@angular/core';
import { SquareStoryLineComponentPair } from 'src/app/model/page-components/suqre-component-pair.model';

@Component({
  selector: 'kp-square-story-line',
  templateUrl: './square-story.component.html',
  styleUrls: ['./square-story.component.scss']
})
export class SquareStoryLineComponent implements OnInit {

  @Input() squareComponents: SquareStoryLineComponentPair[];
  constructor() { 
  }

  ngOnInit(): void {
  }

}
