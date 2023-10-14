import { createContext } from "react";

export enum Theme {
	LIGHT = "light",
	DARK = "dark",
}

export interface ThemeContextProps {
	theme: Theme;
	setTheme: (theme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
	theme: Theme.LIGHT,
	setTheme: function (theme: Theme): void {
		throw new Error("Function not implemented.");
	}
});

export const LOCAL_STORAGE_THEME_KEY = "theme";