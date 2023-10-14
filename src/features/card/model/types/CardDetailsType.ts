export interface CardDetailsType {
	volumeInfo?: {
		title: string,
		authors: string[],
		publisher: string,
		publishedDate: string,
		description: string,
		categories: string[],
		imageLinks: {
			thumbnail: string,
		}
	}
}
export interface CardDetailsState {
	loading: boolean;
	bookDetails: CardDetailsType;
	error: null | string;
}