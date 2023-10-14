import cls from './LoadMoreButton.module.scss';
import Button from 'shared/components/Button/Button';
import { useAppDispatch } from 'app/redux/config/store';
import { setStartIndex } from 'features/books/model/slice/bookSlice';
import { useSelector } from 'react-redux';
import { selectBookData } from 'features/books/model/selectors/getBooks';

const LoadMoreButton = () => {
	const dispatch = useAppDispatch();
	const { books, loading } = useSelector(selectBookData)
	const handleLoadMoreClick = () => {
		dispatch(setStartIndex());
	};
	if (books.length > 0 && !loading) {
		return (
			<Button className={cls.load_more} onClick={handleLoadMoreClick}>
				Load more
			</Button>
		);
	}

	return null;

}

export default LoadMoreButton;