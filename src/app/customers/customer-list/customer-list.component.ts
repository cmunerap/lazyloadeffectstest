import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GetCustomerAction } from '../store/actions';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  constructor(private store: Store<{}>) { }

  ngOnInit() {
  }

  getCustomer() {
    this.store.dispatch(new GetCustomerAction());
  }

}
