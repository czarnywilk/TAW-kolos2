import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrdersATComponent } from './components/orders-at/orders-at.component';
import { OrdersItemATComponent } from './components/orders-item-at/orders-item-at.component';
import { OrdersDetailsATComponent } from './components/orders-details-at/orders-details-at.component';
import { RouterModule } from '@angular/router';
import { ATDataService } from './services/AT-data.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    OrdersATComponent,
    OrdersItemATComponent,
    OrdersDetailsATComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule
  ],
  providers: [ATDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
