import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePage } from './home-page/home-page.component';
import { PagesComponentsModule } from '../pages-components/pages-components.module';
import { ProjectsPage } from './projects-page/projects-page.component';
import { CareerPage } from './career-page/career-page.component';
import { BlogPage } from './blog-page/blog-page.component';
import { SharedModule } from '../shared/shared.module';
import { TimelineModule } from 'primeng/timeline';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@NgModule({
  exports: [
  ],
  declarations: [
    HomePage,
    ProjectsPage,
    CareerPage,
    BlogPage,
  ],
  imports: [
    CommonModule,
    PagesComponentsModule,
    SharedModule,
    TimelineModule,
    ButtonModule,
    CardModule
  ]
})
export class PagesModule { }
