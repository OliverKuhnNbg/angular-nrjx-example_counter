import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer';
import { selectCustomers } from 'src/app/store/customer.selectors';
import { State } from '../../store/customer.reducer'

@Component({
  selector: 'app-customer-view',
  templateUrl: './customer-view.component.html',
  styleUrls: ['./customer-view.component.scss']
})
export class CustomerViewComponent {

  customers: Observable<Customer[]> = new Observable();

  constructor(private store: Store<State>) {
    this.customers = this.store.pipe(select(selectCustomers));
  }
}
