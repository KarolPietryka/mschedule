import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PagesModule } from './pages/pages.module';
import { SharedModule } from './shared/shared.module';
import { ShellComponent } from './shell/shell.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ShellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    //
    SharedModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
