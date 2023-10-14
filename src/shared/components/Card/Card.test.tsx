import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Card } from './Card';

test('renders a list of books', () => {
	const books = [
		{
			id: '1',
			volumeInfo: {
				title: 'Book 1',
				authors: ['Author 1'],
				categories: ['Category 1'],
				imageLinks: {
					smallThumbnail: 'image1.jpg',
				},
			},
		},
		{
			id: '2',
			volumeInfo: {
				title: 'Book 2',
				authors: ['Author 2'],
				categories: ['Category 2'],
				imageLinks: {
					smallThumbnail: 'image2.jpg',
				},
			},
		},
	];

	const { container, getByText, getByAltText } = render(
		<MemoryRouter>
			<Card books={books} />
		</MemoryRouter>
	);

	books.forEach((book) => {
		const bookElement = screen.getByText(book.volumeInfo.title);
		const authorElement = screen.getByText(`Author: ${book.volumeInfo.authors.join(', ')}`);
		const categoryElement = screen.getByText(`Category: ${book.volumeInfo.categories[0]}`);

		expect(bookElement).toBeInTheDocument();
		expect(authorElement).toBeInTheDocument();
		expect(categoryElement).toBeInTheDocument();
		expect(container).toHaveTextContent(book.volumeInfo.title);
	});
});
