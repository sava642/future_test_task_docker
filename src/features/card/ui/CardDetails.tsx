import { useAppDispatch } from 'app/redux/config/store';
import { useEffect, memo } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from 'shared/components/Loader/Loader';
import { classNames } from 'shared/helpers/classNames';
import { selectBookDetailsData } from '../model/selectors/getBookDetails';
import { fetchBookDetails } from '../model/services/fetchBooksDetails';
import cls from "./CardDetails.module.scss"
import defaultImage from '../../../shared/assets/images/def_img.jpeg';

interface RouteParams {
	bookId: string;
}
export const CardDetails = memo(() => {
	const dispatch = useAppDispatch()
	const { bookDetails, error, loading } = useSelector(selectBookDetailsData);
	const { bookId } = useParams<keyof RouteParams>() as RouteParams;

	const {
		title,
		authors,
		categories,
		publisher,
		publishedDate,
		imageLinks,
	} = bookDetails?.volumeInfo || {};
	useEffect(() => {
		const fetchData = async () => {
			try {
				dispatch(fetchBookDetails(bookId));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [dispatch, bookId]);


	return (
		<div className={classNames(cls.wrapper)}>
			{loading ? (
				<Loader />
			) : error ? (
				<p>Error: {error}</p>
			) : (
				bookDetails && (
					<div className={classNames(cls.book_card)}>
						<img className={classNames(cls.book_card_image)} src={imageLinks?.thumbnail || defaultImage} alt="Картинка" />
						<div className={classNames(cls.book_card_details)}>
							<h2>{title || 'Not available'}</h2>
							<h3>Author: {authors?.length ? authors.join(', ') : 'Not author'}</h3>
							<p>Categories: {categories?.length ? categories.join(', ') : "Not categories"}</p>
							<p>Publisher: {publisher || 'Not available'}</p>
							<p>Published Date: {publishedDate || 'Not available'}</p>
						</div>
					</div>
				)
			)}

		</div>
	);
});
