import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { RouteToPageCommand } from 'src/app/model/page-components/tile/cmd/impl/route-to-page.command';
import { TileDialog } from 'src/app/model/page-components/tile/cmd/impl/tile-dialog.command';
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
          desc: 'Check Out My Coding Projects: A Collection of Minor Projects',
          imgUrl: '../../../assets/home/tiles/projects.png',
          clickCommand: new RouteToPageCommand("/projects", this.tileClickContext)
      },
      {
          title: 'Career',
          desc: 'My Career in Code: A Glimpse into the Timeline of My Work.',
          imgUrl: '../../../assets/home/tiles/career.png',
          clickCommand: new RouteToPageCommand("/career", this.tileClickContext)
      }
    ],
    [
      {
          title: 'Contact',
          desc: "Let's Get in Touch: Reach Out to Discuss Coding, Projects, and More.",
          imgUrl: '../../../assets/home/tiles/contact.png',
          clickCommand: new TileDialog(
            this.dialog,
            {
              email: "karol.jaroslaw.pietryka@gmail.com",
              tels: ["+48 508 442 599"],
              githubText: "Karol Pietryka - GitHub",
              githubUrl: "https://github.com/KarolPietryka",
              linkedInText: "Karol Pietryka -LinkeIn",
              linkedInUrl: "https://www.linkedin.com/in/karol-pietryka/"
            },
            this.tileClickContext)
      },
      {
        title: 'Blog',
        desc: 'Share My Thoughts: Explore My Programming Insights on My Blog.',
        imgUrl: '../../../assets/home/tiles/blog.png',
        clickCommand: new RouteToPageCommand("/blog", this.tileClickContext)
      }
    ]
  ]
  constructor(
    private tileClickContext: TileClickContext,
    private dialog: MatDialog){}

  ngOnInit(): void {
  }

}
