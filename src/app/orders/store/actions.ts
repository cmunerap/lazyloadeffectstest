import {Action} from '@ngrx/store';

export const GETORDER = '[ORDER] GetOrder';

export class GetOrderAction implements Action {
  type = GETORDER;
}
