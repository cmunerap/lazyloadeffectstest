import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { GetOrderAction } from '../store/actions';

@Component({
  selector: 'app-orders-list',
  templateUrl: './orders-list.component.html',
  styleUrls: ['./orders-list.component.css']
})
export class OrdersListComponent implements OnInit {

  constructor(private store: Store<{}>) { }

  ngOnInit() {
  }

  getOrder() {
    this.store.dispatch(new GetOrderAction());
  }
}
