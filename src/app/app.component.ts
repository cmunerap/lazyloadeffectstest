import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { InitializeAction } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';

  constructor(private store: Store<{}>) {

  }

  ngOnInit() {
    this.store.dispatch(new InitializeAction());
  }
}
