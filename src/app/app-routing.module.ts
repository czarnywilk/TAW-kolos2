import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersATComponent } from './components/orders-at/orders-at.component';
import { OrdersDetailsATComponent } from './components/orders-details-at/orders-details-at.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersATComponent
  },
  {
    path: 'orders/detail/:id',
    component: OrdersDetailsATComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
