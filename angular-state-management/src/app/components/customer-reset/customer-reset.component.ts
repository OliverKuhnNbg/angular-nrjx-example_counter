import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';

@Component({
  selector: 'app-customer-reset',
  templateUrl: './customer-reset.component.html',
  styleUrls: ['./customer-reset.component.scss']
})
export class CustomerResetComponent {
  constructor(private store: Store) {
  }

  resetCustomerList(): void {
    console.log('call component method')
    //this.store.dispatch(loadCustomers(customer));
  }
}
