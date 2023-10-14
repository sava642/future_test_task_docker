import { memo } from 'react';
import cls from './Switch.module.scss';
import { ReactComponent as Moon } from '../../assets/icons/moon.svg';
import { ReactComponent as Sun } from '../../assets/icons/sun.svg';
import { useTheme } from 'app/theme/useTheme';

interface SwitchProps {
	toggleTheme: () => void;
}

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
}

export const Switch = memo((props: SwitchProps) => {
	const { theme, toggleTheme } = useTheme()
	return (
		<div className={cls.icon}>
			{theme === "light" ? <Moon height="28px" width="28px" onClick={toggleTheme} /> : <Sun height="28px" width="28px" onClick={toggleTheme} />}
		</div>
	);
});