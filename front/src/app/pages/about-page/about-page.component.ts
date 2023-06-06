import { Component, OnInit } from '@angular/core';
import { SquareStoryLineComponentPair } from 'src/app/model/page-components/suqre-component-pair.model';

@Component({
  selector: 'about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.scss']
})
export class AboutPage implements OnInit {

  content: SquareStoryLineComponentPair[][] = [
    []
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
