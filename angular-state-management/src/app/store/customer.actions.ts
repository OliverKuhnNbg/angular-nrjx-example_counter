import { createAction, props } from '@ngrx/store';
import { Customer } from '../models/customer';

export const loadCustomers = createAction(
  '[Customer] Load Customers',
  (customer: Customer) => ({customer})
);




