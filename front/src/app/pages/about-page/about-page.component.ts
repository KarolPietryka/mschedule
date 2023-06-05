import { Component, OnInit } from '@angular/core';
import { SquareStoryLineComponentPair } from 'src/app/model/page-components/suqre-component-pair.model';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPage implements OnInit {

  content: SquareStoryLineComponentPair[][] = [
    [
      {
        imgUrl: '../../../assets/KP_circle.png',
        text:" TEset"
      },
      {
        imgUrl: '../../../assets/KP_circle.png',
        text:" TEset"
      }
    ],
    [
      {
        imgUrl: '../../../assets/KP_circle.png',
        text:" TEset"
      }
    ]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
