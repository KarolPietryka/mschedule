import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kp-tail',
  templateUrl: './tail.component.html',
  styleUrls: ['./tail.component.scss']
})
export class Tail implements OnInit {

title: String = "test Title";
desc: String;
imgUrl: String;

  constructor() { 
    this.imgUrl = '../../../assets/Blog.png'
  }

  ngOnInit(): void {

  }

}
