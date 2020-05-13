import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ExploreComponent } from './explore/explore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotificationComponent } from './notification/notification.component';
import { MessageComponent } from './message/message.component';


@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent, SearchBarComponent, ExploreComponent, NotificationComponent, MessageComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MainRoutingModule
  ]
})
export class MainModule { }
