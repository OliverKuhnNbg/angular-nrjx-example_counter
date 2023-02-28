import { Action, createReducer, on } from '@ngrx/store';
import * as CounterActions from '../store/counter.actions'
import { Counter } from '../models/counter';
import { State } from '../reducers';
import { increment, decrement, reset} from '../store/counter.actions'

export const counterFeatureKey = 'counter';


export const initialState = 0;

export const counterReducer = createReducer(initialState,
  on(increment, (state) => state + 1),
  on(decrement, (state) => state - 1),
  on(reset, (state) => 0)
);