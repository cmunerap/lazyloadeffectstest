import {Action} from '@ngrx/store';

export const GETCUSTOMER = '[CUSTOMER] GetCustomer';

export class GetCustomerAction implements Action {
  type = GETCUSTOMER;
}
