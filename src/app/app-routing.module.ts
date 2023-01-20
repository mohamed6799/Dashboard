import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './Components/courses/courses.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { Error404Component } from './Components/error404/error404.component';
import { FilesComponent } from './Components/files/files.component';
import { FriendsProfileComponent } from './Components/friends-profile/friends-profile.component';
import { FriendsComponent } from './Components/friends/friends.component';
import { PlansComponent } from './Components/plans/plans.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { ProjectsComponent } from './Components/projects/projects.component';
import { SettingsComponent } from './Components/settings/settings.component';

const routes: Routes = [
  {path:"",redirectTo:"dashboard",pathMatch:'full'},
  {path:"dashboard",component:DashboardComponent},
  {path:"courses",component:CoursesComponent},
  {path:"files",component:FilesComponent},
  {path:"friends",component:FriendsComponent},
  {path:"profileFriends/:id",component:FriendsProfileComponent},
  {path:"plans",component:PlansComponent},
  {path:"profile",component:ProfileComponent},
  {path:"settings",component:SettingsComponent},
  {path:"projects",component:ProjectsComponent},
  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
