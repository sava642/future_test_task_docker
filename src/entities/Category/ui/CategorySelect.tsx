import { useCallback } from 'react';
import Select from 'shared/components/Select/Select';
import { CategoryTypes, options } from '../model/types/CategoryTypes';
import { useAppDispatch } from 'app/redux/config/store';
import { setFilterBy } from 'features/books/model/slice/filterSlice';

export const CategorySelect = () => {
	const dispatch = useAppDispatch();

	const onChangeHandler = useCallback(
		(value: string) => {
			dispatch(setFilterBy(value as CategoryTypes));
		},
		[dispatch]
	);

	return (
		<Select
			options={options}
			onChange={onChangeHandler}
		/>
	);
};


