import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'kp-tail',
  templateUrl: './tail.component.html',
  styleUrls: ['./tail.component.scss']
})
export class Tail implements OnInit {

  @Input() title: String;
  @Input() desc: String;
  @Input() imgUrl: String;
  @Input() clickRoute: String;

  constructor() { 
  }

  ngOnInit(): void {

  }

}
