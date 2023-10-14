import { ReactNode, useMemo, useState } from "react";
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Theme } from "./ThemeContext";

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;


type Props = { children: ReactNode }

const ThemeProvider: React.FC<Props> = ({ children }) => {

	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultValue = useMemo(() => ({
		theme: theme,
		setTheme: setTheme,
	}), [theme])

	return (
		<ThemeContext.Provider value={defaultValue}>
			{children}
		</ThemeContext.Provider>
	)
}
export default ThemeProvider;