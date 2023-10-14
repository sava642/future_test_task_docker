import { classNames } from 'shared/helpers/classNames';
import { memo, useEffect, useState } from 'react';
import cls from './Header.module.scss';
import { CategorySelect } from 'entities/Category';
import { SortingSelect } from 'entities/Sorting';
import Input from 'shared/components/Input/Input';
import { selectFiltersData } from 'features/books';
import { useSelector } from 'react-redux';
import { fetchBooksAsync } from 'features/books/model/services/fetchBooksAsync';
import { useAppDispatch } from 'app/redux/config/store';
import { ReactComponent as SearchIcon } from '../../shared/assets/icons/search.svg';
import { setQuery } from 'features/books/model/slice/bookSlice';
import { selectBookData } from 'features/books';


export const Header = memo(() => {

	const dispatch = useAppDispatch();

	const [queryInput, setQueryInput] = useState<string>('');
	const handleQueryChange = (newValue: string) => {
		setQueryInput(newValue);
	};
	const { query, startIndex, maxResults } = useSelector(selectBookData);
	const { sortBy, filterBy } = useSelector(selectFiltersData);


	const handleEnterKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.key === 'Enter' && queryInput.trim() !== '') {
			dispatch(setQuery(queryInput));
		}
	};
	const handleSearchClick = () => {
		dispatch(setQuery(queryInput));
	};

	useEffect(() => {
		const fetchData = async () => {
			try {
				dispatch(fetchBooksAsync({ query, sortBy, filterBy, startIndex, maxResults }));
			} catch (error) {
				console.log(error);
			}
		};
		fetchData();
	}, [dispatch, filterBy, maxResults, query, sortBy, startIndex]);

	return (
		<header>
			<h1>Search for books</h1>
			<div className={classNames(cls.search_input)}>
				<Input value={queryInput} onChange={handleQueryChange} placeholder={'search'} onKeyDown={handleEnterKeyPress} />
				<div className={cls.search_svg} onClick={handleSearchClick}>
					<SearchIcon />
				</div>
			</div>
			<div className={classNames(cls.block_sorting)}>
				<div className={classNames(cls.block_categories)}>
					<p>Categories</p>
					<CategorySelect />
				</div>
				<div className={classNames(cls.block_sortBy)}>
					<p>Sorting by</p>
					<SortingSelect />
				</div>
			</div>
		</header>
	);
});



