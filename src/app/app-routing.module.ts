import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { MenuComponent } from './menu/menu.component';
import { RestaurantComponent } from './restaurant/restaurant.component';

const routes: Routes = [{
  path: "restaurant",
  component: RestaurantComponent
},{
  path: "show/:id",
  component: DetailComponent
},{
  path: "",
  component: RestaurantComponent
},{
  path: "menu",
  component: MenuComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
