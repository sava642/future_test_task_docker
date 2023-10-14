import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { Book } from '../types/bookSchema';

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchBooksAsync = createAsyncThunk<
	Book[],
	{ query: string; sortBy: string; filterBy: string; startIndex: number; maxResults: number; }
>('books/fetchBooks', async ({ query, sortBy, filterBy, startIndex, maxResults }) => {

	const subject = filterBy ? `+subject:${filterBy}` : '';

	try {
		if (query.trim() === '') {
			return [];
		}

		const response = await axios.get(
			`https://www.googleapis.com/books/v1/volumes?q=${query}${subject}&startIndex=${startIndex}&maxResults=${maxResults}&key=${apiKey}`
		);

		if (!response.data) {
			throw new Error('No data found.');
		}

		return response.data.items;

	} catch (error) {
		throw error;
	}
});