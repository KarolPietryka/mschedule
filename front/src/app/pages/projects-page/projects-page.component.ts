import { Component, OnInit } from '@angular/core';
import { SquareStoryLineComponentPair } from 'src/app/model/page-components/suqre-component-pair.model';

@Component({
  selector: 'projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.scss']
})
export class ProjectsPage implements OnInit {

  content: SquareStoryLineComponentPair[][] = [
    [
      {
        imgUrl: '../../../assets/KP_circle.png',
        title:"Website",
        desc: "DESC"
      },
      {
        imgUrl: '../../../assets/KP_circle.png',
        title:"LeetCode | ",
        desc: "DESC"
      }
    ],
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
