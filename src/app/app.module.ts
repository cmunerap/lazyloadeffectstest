import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AppEffects } from './store/effects';
import { reducers } from './store/store';
import { LoggerService } from './shared/logger.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot(reducers)
  ],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
