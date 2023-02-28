import { createAction, props } from '@ngrx/store';
import { Counter } from '../models/counter';

export const increment = createAction('[Counter Component] Increment');
export const decrement = createAction('[Counter Component] Decrement');
export const reset = createAction('[Counter Component] Reset');




