import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutPage } from './pages/about-page/about-page.component';
import { HomePage } from './pages/home-page/home-page.component';
import { SchedulerPage } from './pages/scheduler-page/scheduler-page.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children:[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'about', component: AboutPage },
    { path: 'scheduler', component: SchedulerPage },
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
