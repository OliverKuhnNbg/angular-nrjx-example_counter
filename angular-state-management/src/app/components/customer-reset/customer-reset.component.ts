import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Customer } from 'src/app/models/customer';
import { loadCustomers, resetCustomersList } from 'src/app/store/customer.actions';

@Component({
  selector: 'app-customer-reset',
  templateUrl: './customer-reset.component.html',
  styleUrls: ['./customer-reset.component.scss']
})
export class CustomerResetComponent {
  constructor(private store: Store) {
  }

  resetCustomerList(): void {
    this.store.dispatch(resetCustomersList());
  }
}
