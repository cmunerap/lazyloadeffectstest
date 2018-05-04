import * as fromCustomers from '../customers/store/reducers';
import * as fromOrders from '../orders/store/reducers';
import * as fromApp from './reducers';

export const reducers = {
  customers: fromCustomers.reducer,
  orders: fromOrders.reducer,
  app: fromApp.reducer
};
