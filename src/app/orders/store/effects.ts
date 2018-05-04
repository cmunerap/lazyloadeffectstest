import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/do';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as orders from './actions';
import { OrderService } from '../shared/order.service';

@Injectable()
export class OrderEffects {
    @Effect({ dispatch: false })
    getOrders$: Observable<Action> = this.actions$
        .ofType(orders.GETORDER)
        .map(action => action)
        .do((action) =>
            this.orderService.getOrder()
        );

    constructor(
        private actions$: Actions,
        private orderService: OrderService
    ) {
      console.info('[EFFECTS] OrderEffects are now subscribed');
    }
}
