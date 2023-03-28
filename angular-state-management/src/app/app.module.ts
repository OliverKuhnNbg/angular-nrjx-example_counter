import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { CustomerModule } from './customer/customer.module';
import { CounterModule } from './modules/counter/counter.module';
import { counterReducer } from './store/counter.reducer';
import { ShowPumpComponent } from './components/show-pump/show-pump.component'

@NgModule({
  declarations: [
    AppComponent,
    ShowPumpComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({ count: counterReducer }),
    StoreDevtoolsModule.instrument(),
    CustomerModule,
    CounterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
