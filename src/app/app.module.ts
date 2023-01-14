import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { SettingsComponent } from './Components/settings/settings.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { CoursesComponent } from './Components/courses/courses.component';
import { FriendsComponent } from './Components/friends/friends.component';
import { FilesComponent } from './Components/files/files.component';
import { PlansComponent } from './Components/plans/plans.component';
import { Navbar2Component } from './Components/navbar2/navbar2.component';
import { Error404Component } from './Components/error404/error404.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { FriendsProfileComponent } from './Components/friends-profile/friends-profile.component';
import { CapitPipe } from './Pipes/capit.pipe'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    SettingsComponent,
    ProfileComponent,
    CoursesComponent,
    FriendsComponent,
    FilesComponent,
    PlansComponent,
    Navbar2Component,
    Error404Component,
    ProjectsComponent,
    FriendsProfileComponent,
    CapitPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
