import cls from './MainPage.module.scss';
import { Header } from 'widgets/Header/Header';
import { BookList } from 'features/books/ui/BookList';
import classNames from 'classnames';
import LoadMoreButton from 'entities/LoadMoreButton/ui/LoadMoreButton';
import { memo } from 'react';

const MainPage = memo(() => {
	return (
		<div className={classNames(cls.container)} data-testid="main-page">
			<Header />
			<div className={classNames(cls.book_list)}>
				<BookList />
				<div className={classNames(cls.btn_load_more)}>
					<LoadMoreButton />
				</div>
			</div>
		</div>
	)
})
export default MainPage;


