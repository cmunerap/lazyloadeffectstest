import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as customers from './actions';
import { CustomerService } from '../shared/customer.service';

@Injectable()
export class CustomerEffects {
    @Effect({ dispatch: false })
    getCustomer$: Observable<Action> = this.actions$
        .ofType(customers.GETCUSTOMER)
        .map(action => action)
        .do((action) =>
            this.customerService.getCustomer()
        );

    constructor(
        private actions$: Actions,
        private customerService: CustomerService
    ) {
      console.info('[EFFECTS] CustomerEffects are now subscribed');
    }
}
