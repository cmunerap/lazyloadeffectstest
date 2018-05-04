import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as app from './actions';
import { LoggerService } from '../shared/logger.service';

@Injectable()
export class AppEffects {
    @Effect({ dispatch: false })
    initializeApp$: Observable<Action> = this.actions$
        .ofType(app.INITIALIZEAPP)
        .map(action => action)
        .do((action) => {
            this.loggerService.write('The application is now initialized!');
          }
        );

    constructor(
        private actions$: Actions,
        private loggerService: LoggerService
    ) {
      console.info('[EFFECTS] AppEffects are now subscribed');
    }
}
