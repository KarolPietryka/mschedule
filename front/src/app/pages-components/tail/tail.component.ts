import { Component, Input, OnInit } from '@angular/core';
import { AbstractTileClickCommand } from 'src/app/model/page-components/tile/cmd/abstr-tile-click.command';

@Component({
  selector: 'kp-tail',
  templateUrl: './tail.component.html',
  styleUrls: ['./tail.component.scss']
})
export class Tail implements OnInit {

  @Input() title: String;
  @Input() desc: String;
  @Input() imgUrl: String;
  @Input() clickCommand: AbstractTileClickCommand;

  constructor() { 
  }

  ngOnInit(): void {

  }
  tileClicked(){
    this.clickCommand.execute();
  }

}
