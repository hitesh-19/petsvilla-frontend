import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExploreComponent } from './explore/explore.component';
import { MessageComponent } from './message/message.component';


const routes: Routes = [
  // {path: '', component: HomeComponent},
  // {path: 'explore', component: ExploreComponent},
  // {path: 'message', component: MessageComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
