import { createAsyncThunk } from '@reduxjs/toolkit';
import axios, { AxiosResponse } from 'axios';
import { CardDetailsType } from '../types/CardDetailsType';

const apiKey = process.env.REACT_APP_API_KEY;

export const fetchBookDetails = createAsyncThunk<CardDetailsType, string, {}>(
	'books/fetchBookDetails',
	async (volumeId: string) => {
		try {
			const response: AxiosResponse<CardDetailsType> = await axios.get(
				`https://www.googleapis.com/books/v1/volumes/${volumeId}?key=${apiKey}`
			);

			if (response && response.data) {
				return response.data;
			} else {
				throw new Error('No data found.');
			}
		} catch (error) {
			throw error;
		}
	}
);




