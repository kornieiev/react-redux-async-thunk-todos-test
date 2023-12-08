import { createSlice } from '@reduxjs/toolkit';
import { statusFilters } from './constants';

const filtersInitialState = {
  status: statusFilters.all,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState: filtersInitialState,
  reducers: {
    setStatusFilter(state, action) {
      state.status = action.payload;
    },
  },
});

// Експортуємо генератори екшенів та редюсер
export const { setStatusFilter } = filtersSlice.actions;
console.log('setStatusFilter:', setStatusFilter);

console.log('filtersSlice.actions:', filtersSlice.actions);
export const filtersReducer = filtersSlice.reducer;
