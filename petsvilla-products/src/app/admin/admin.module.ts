import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddStoriesComponent } from './add-stories/add-stories.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';


@NgModule({
  declarations: [AddProductsComponent, AddStoriesComponent, ViewOrdersComponent, SignInComponent, SidebarComponent, CompletedOrdersComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
