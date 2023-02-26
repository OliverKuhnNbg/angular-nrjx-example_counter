import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from '../../app/store/customer.reducer';
import { CustomerViewComponent } from '../components/customer-view/customer-view.component';
import { CustomerAddComponent } from '../components/customer-add/customer-add.component';
import { CustomerResetComponent } from '../components/customer-reset/customer-reset.component';


@NgModule({
  declarations: [CustomerViewComponent, CustomerAddComponent, CustomerResetComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
    exports: [
      CustomerViewComponent,
      CustomerAddComponent,
      CustomerResetComponent
    ]
})
export class CustomerModule { }
