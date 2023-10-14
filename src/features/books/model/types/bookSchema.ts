export interface Book {
	id: string,
	volumeInfo: {
		title: string,
		authors: string[],
		categories: string[],
		imageLinks: {
			smallThumbnail: string,
		},
	},
}

export interface BookSchema {
	books: Book[];
}
export interface BookState {
	loading: boolean;
	books: Book[];
	error: null | string;
	previousQuery: string;
	query: string;
	startIndex: number;
	maxResults: number;
}
export interface SortingState {
	filterBy: string;
	sortBy: string;
	query: string;
}