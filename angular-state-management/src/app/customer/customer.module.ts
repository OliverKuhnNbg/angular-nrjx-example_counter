import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {customerFeatureKey, reducer} from '../../app/store/customer.reducer';
import { CustomerViewComponent } from '../components/customer-view/customer-view.component';
import { CustomerAddComponent } from '../components/customer-add/customer-add.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(customerFeatureKey, reducer),
  ],
    exports: [
      CustomerViewComponent,
      CustomerAddComponent
    ]
})
export class CustomerModule { }
