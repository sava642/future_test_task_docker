import React from 'react';
import classNames from 'classnames';
import cls from './Button.module.scss';

interface ButtonSchema {
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
}


const Button = ({ children, className, onClick, ...restProps }: ButtonSchema) => {

	const buttonClasses = classNames(cls.button, className);

	return (
		<button className={buttonClasses} onClick={onClick} {...restProps}>
			{children}
		</button>
	);
}

export default Button;
