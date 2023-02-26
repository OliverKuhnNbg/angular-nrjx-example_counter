import { Action, createReducer, on } from '@ngrx/store';
import * as CustomerActions from '../store/customer.actions'
import { Customer } from '../models/customer';

export const customerFeatureKey = 'customer';

export interface State {
  customers: Customer[];
}

export const initialState: State = {
  customers: []
};

export const customerReducer = createReducer(
  initialState,
  on(CustomerActions.loadCustomers,
    (state: State, {customer}) =>
      ({...state,
        customers: [...state.customers, customer]
      })),
  on(CustomerActions.resetCustomersList,
    (state: State, {}) =>
      ({...state,
        customers: []
      }))
);


export function reducer(state: State | undefined, action: Action): any {
  return customerReducer(state, action);
}
