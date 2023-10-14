import cls from './MainPage.module.scss';
import classNames from 'classnames';
import { memo } from 'react';
import { CardDetails } from 'features/card';

const CardDetailsPage = memo(() => {
	return (
		<div className={classNames(cls.container)} data-testid="card-details-page">
			<CardDetails />
		</div>
	)
})
export default CardDetailsPage;