import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutPage } from './about-page/about-page.component';
import { SchedulerPage } from './scheduler-page/scheduler-page.component';
import { HomePage } from './home-page/home-page.component';

@NgModule({
  exports: [
    AboutPage,
  ],
  declarations: [
    AboutPage,
    SchedulerPage,
    HomePage
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
