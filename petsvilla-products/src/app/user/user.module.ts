import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCartComponent } from './product-cart/product-cart.component';
import { PlaceOrderComponent } from './place-order/place-order.component';


@NgModule({
  declarations: [
    HomeComponent, 
    GalleryComponent,
    ProductListComponent, 
    ProductCartComponent, 
    PlaceOrderComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
