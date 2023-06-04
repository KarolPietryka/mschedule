import { Component, OnInit } from '@angular/core';
import { TileModel } from 'src/app/model/page-components/tile.model';

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
          clickRoute: '/projects'
      },
      {
          title: 'Career',
          desc: 'Test description2',
          imgUrl: '../../../assets/home/tiles/career.png',
          clickRoute: '/career'
      }
  ],
  [
      {
          title: 'About me',
          desc: 'Test description3',
          imgUrl: '../../../assets/home/tiles/about.png',
          clickRoute: '/about'
      },
      {
          title: 'Downloads',
          desc: 'Test description4',
          imgUrl: '../../../assets/home/tiles/downloads.png',
          clickRoute: '/downloads'
      }
  ],
  [
      {
        title: 'Blog',
        desc: 'test',
        imgUrl: '../../../assets/home/tiles/blog.png',
        clickRoute: '/blog'
      }
  ]
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
