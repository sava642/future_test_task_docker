import { classNames, Mods } from 'shared/helpers/classNames';
import { ChangeEvent, memo } from 'react';
import cls from './Input.module.scss';

interface InputProps {
	className?: string;
	value: string;
	onChange: (value: string) => void;
	placeholder?: string;
	onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = memo((props: InputProps) => {
	const { className, value, onChange, placeholder, onKeyDown } = props;
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		if (onChange) {
			onChange(e.target.value);
		}
	};
	const mods: Mods = {};
	return (
		<input
			className={classNames(cls.input, mods, [className])}
			type="text"
			value={value}
			onChange={onChangeHandler}
			placeholder={placeholder}
			onKeyDown={onKeyDown}
		/>
	);
});
export default Input;

