import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchBookDetails } from '../services/fetchBooksDetails';
import { CardDetailsState, CardDetailsType } from '../types/CardDetailsType';

const initialState: CardDetailsState = {
	loading: false,
	bookDetails: {},
	error: null,
};

const bookDetailsSlice = createSlice({
	name: 'bookDetails',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchBookDetails.pending, (state) => {
				state.loading = true;
				state.error = null;
			})
			.addCase(fetchBookDetails.fulfilled, (state, action: PayloadAction<CardDetailsType>) => {
				state.loading = false;
				if (action.payload) {
					state.bookDetails = action.payload;
				} else {
					state.error = 'Book not found.';
				}
			})
			.addCase(fetchBookDetails.rejected, (state, action) => {
				state.loading = false;
				state.error = action.error.message || 'An error occurred.';
			});
	},
});

export const bookDetailsReducer = bookDetailsSlice.reducer;
