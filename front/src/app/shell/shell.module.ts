import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBar } from './nav-bar/nav-bar.component';
import { Footer } from './footer/footer.component';
import { SharedModule } from '../shared/shared.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';
import { SideBarComponent } from './side-bar/side-bar.component';


@NgModule({
  exports: [
    NavBar,
    ShellComponent,
    Footer,
    SideBarComponent
  ],
  declarations: [
    NavBar,
    ShellComponent,
    Footer,
    SideBarComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FontAwesomeModule,
    RouterModule
  ]
})
export class ShellModule { }
