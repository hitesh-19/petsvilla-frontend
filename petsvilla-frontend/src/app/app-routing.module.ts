import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { MessageComponent } from './message/message.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'explore', component: ExploreComponent},
  {path: 'message', component: MessageComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'registration',  loadChildren: () => import('./registration/registration.module').then(m => m.RegistrationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
