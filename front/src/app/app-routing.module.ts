import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogPage } from './pages/blog-page/blog-page.component';
import { CareerPage } from './pages/career-page/career-page.component';
import { HomePage } from './pages/home-page/home-page.component';
import { ProjectsPage } from './pages/projects-page/projects-page.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children:[
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomePage },
    { path: 'projects', component: ProjectsPage },
    { path: 'career', component: CareerPage },
    { path: 'blog', component: BlogPage },
  ]
}];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
