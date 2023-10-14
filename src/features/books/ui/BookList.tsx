import { memo } from 'react';
import { useSelector } from 'react-redux';
import { selectBookData } from '../model/selectors/getBooks';
import cls from './BookList.module.scss'
import classNames from 'classnames';
import { Card } from 'shared/components/Card/Card';
import Loader from 'shared/components/Loader/Loader';


export const BookList = memo(() => {

	const { error, loading, books } = useSelector(selectBookData);

	return (
		<div className={classNames(cls.container)}>
			{loading ? (
				<div className={classNames(cls.loader)}>
					<Loader />
				</div>
			) : error ? (
				<p>Error: {error}</p>
			) : (
				<>
					{books.length > 0 ? <p className={classNames(cls.counter)}>Found {books.length} results</p> : <p className={classNames(cls.counter)}>Enter search string</p>}
					<Card books={books} />
				</>

			)}
		</div>
	);
})




