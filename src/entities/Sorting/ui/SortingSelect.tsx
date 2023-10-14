import { classNames } from 'shared/helpers/classNames';
import Select from 'shared/components/Select/Select';
import { memo, useCallback } from 'react';
import { SortingTypes, options } from '../model/types/SortingTypes';
import { useAppDispatch } from 'app/redux/config/store';
import { setSortBy } from 'features/books/model/slice/filterSlice';


export const SortingSelect = memo(() => {
	const dispatch = useAppDispatch();
	const onChangeHandler = useCallback(
		(value: string) => {
			dispatch(setSortBy(value as SortingTypes));
		},
		[dispatch]
	);

	return (
		<Select
			className={classNames('', {}, [])}
			options={options}
			//value={value}
			onChange={onChangeHandler}
		/>
	);
});