import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersListComponent } from './orders-list/orders-list.component';

import { OrderEffects } from './store/effects';
import { OrderService } from './shared/order.service';

@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule,
    EffectsModule.forFeature([OrderEffects])
  ],
  providers: [OrderService],
  declarations: [OrdersListComponent]
})
export class OrdersModule { }
