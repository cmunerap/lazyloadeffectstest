import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomerListComponent } from './customer-list/customer-list.component';

import { CustomerEffects } from './store/effects';
import { CustomerService } from './shared/customer.service';

@NgModule({
  imports: [
    CommonModule,
    CustomersRoutingModule,
    EffectsModule.forFeature([CustomerEffects])
  ],
  providers: [CustomerService],
  declarations: [CustomerListComponent]
})
export class CustomersModule { }
