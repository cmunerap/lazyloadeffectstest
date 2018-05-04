import {Action} from '@ngrx/store';

export const INITIALIZEAPP = '[APP] Initialize';

export class InitializeAction implements Action {
  type = INITIALIZEAPP;
}
