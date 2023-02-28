import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCounter from '../store/counter.reducer';

export const selectCounterState = createFeatureSelector<fromCounter.State> (
      fromCounter.counterFeatureKey,
);

export const selectCount = createSelector(
  selectCounterState,
  (state: fromCounter.State) => state.counter
);
