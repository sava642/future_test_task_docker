import { RootState } from 'app/redux/config/store';
import { createSelector } from '@reduxjs/toolkit';

const selectBooksState = (state: RootState) => state.books;

export const selectBookData = createSelector(
	selectBooksState,
	(booksState) => ({
		error: booksState.error,
		loading: booksState.loading,
		books: booksState.books,
		query: booksState.query,
		startIndex: booksState.startIndex,
		maxResults: booksState.maxResults,
	})
);


