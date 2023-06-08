import { Component, OnInit } from '@angular/core';
import { RouteToPageCommand } from 'src/app/model/page-components/tile/cmd/impl/route-to-page.command';
import { TileClickContext } from 'src/app/model/page-components/tile/cmd/tile-click.context';
import { TileModel } from 'src/app/model/page-components/tile/tile.model';

@Component({
  selector: 'home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePage implements OnInit {

  tiles: TileModel[][] = [
    [
      {
          title: 'Projects',
          desc: 'Test description1',
          imgUrl: '../../../assets/home/tiles/projects.png',
          clickCommand: new RouteToPageCommand("/projects", this.tileClickContext)
      },
      {
          title: 'Career',
          desc: 'Test description2',
          imgUrl: '../../../assets/home/tiles/career.png',
          clickCommand: new RouteToPageCommand("/career", this.tileClickContext)
      }
    ],
    [
      {
          title: 'Downloads',
          desc: 'Test description4',
          imgUrl: '../../../assets/home/tiles/downloads.png',
          clickCommand: new RouteToPageCommand("/career", this.tileClickContext)
      },
      {
        title: 'Blog',
        desc: 'test',
        imgUrl: '../../../assets/home/tiles/blog.png',
        clickCommand: new RouteToPageCommand("/blog", this.tileClickContext)
      }
    ]
  ]
  constructor(private tileClickContext: TileClickContext){}

  ngOnInit(): void {
  }

}
