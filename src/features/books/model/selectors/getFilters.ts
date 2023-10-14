import { RootState } from 'app/redux/config/store';
import { createSelector } from '@reduxjs/toolkit';

const selectFiltersState = (state: RootState) => state.filters;

export const selectFiltersData = createSelector(
	selectFiltersState,
	(filtersState) => ({
		filterBy: filtersState.filterBy,
		sortBy: filtersState.sortBy,
	})
);