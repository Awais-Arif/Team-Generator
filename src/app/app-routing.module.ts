import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { TeamComponent } from './team/team.component';
// import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: TeamComponent },
  // {path: '' , redirectTo: 'AppComponent', pathMatch: 'full'},
  { path: 'about', component: AboutComponent },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }