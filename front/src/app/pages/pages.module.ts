import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './about-page/about-page.component';
import { SchedulerPage } from './scheduler-page/scheduler-page.component';
import { HomePage } from './home-page/home-page.component';
import { PagesComponentsModule } from '../pages-components/pages-components.module';
import { ProjectsPage } from './projects-page/projects-page.component';
import { CareerPage } from './career-page/career-page.component';
import { DownloadsPage } from './downloads-page/downloads-page.component';
import { BlogPage } from './blog-page/blog-page.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  exports: [
    AboutPage,
  ],
  declarations: [
    AboutPage,
    SchedulerPage,
    HomePage,
    ProjectsPage,
    CareerPage,
    DownloadsPage,
    BlogPage
  ],
  imports: [
    CommonModule,
    PagesComponentsModule,
    SharedModule
  ]
})
export class PagesModule { }
