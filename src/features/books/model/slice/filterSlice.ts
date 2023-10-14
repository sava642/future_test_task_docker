import { createSlice } from '@reduxjs/toolkit';
import { SortingState } from '../types/bookSchema';

const initialState: SortingState = {
	filterBy: '',
	sortBy: 'relevance',
	query: '',
};

const filtersSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		setFilterBy: (state, action) => {
			state.filterBy = action.payload;
		},
		setSortBy: (state, action) => {
			state.sortBy = action.payload;
		},
		setQuery: (state, action) => {
			state.query = action.payload;
		}
	},
});

export const { setFilterBy, setSortBy, setQuery } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;


