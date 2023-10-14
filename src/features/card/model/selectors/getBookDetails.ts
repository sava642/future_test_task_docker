import { RootState } from 'app/redux/config/store';
import { createSelector } from '@reduxjs/toolkit';

const selectBookDetailsState = (state: RootState) => state.bookDetails;

export const selectBookDetailsData = createSelector(
	selectBookDetailsState,
	(CardDetailsState) => ({
		error: CardDetailsState.error,
		loading: CardDetailsState.loading,
		bookDetails: CardDetailsState.bookDetails,
	})
);


