import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBooksAsync } from '../services/fetchBooksAsync';
import { BookState } from '../types/bookSchema';


const initialState: BookState = {
	loading: false,
	books: [],
	error: null,
	previousQuery: '',
	query: '',
	startIndex: 1,
	maxResults: 30,
};

const bookSlice = createSlice({
	name: 'books',
	initialState,
	reducers: {
		setQuery: (state, action: PayloadAction<string>) => {
			state.previousQuery = state.query;
			state.query = action.payload;
		},
		setStartIndex: (state) => {
			state.previousQuery = state.query;
			state.startIndex += 1;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBooksAsync.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchBooksAsync.fulfilled, (state, action) => {
				state.loading = false;
				if (action.payload) {
					if (state.query === state.previousQuery) {
						state.books.push(...action.payload);
					} else {
						state.books = action.payload;
					}
				} else {
					state.error = 'Not found.';
				}
			})
			.addCase(fetchBooksAsync.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'An error occurred.';
			});
	},
});

export const { setQuery, setStartIndex } = bookSlice.actions;
export const bookReducer = bookSlice.reducer;


