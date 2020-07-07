import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { AddProductsComponent } from './add-products/add-products.component';
import { AddStoriesComponent } from './add-stories/add-stories.component';
import { CompletedOrdersComponent } from './completed-orders/completed-orders.component';


const routes: Routes = [
  {path: '', component: SignInComponent},
  {path: 'view-orders', component: ViewOrdersComponent},
  {path: 'completed-orders', component: CompletedOrdersComponent},
  {path: 'add-products', component: AddProductsComponent},
  {path: 'add-stories', component: AddStoriesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
