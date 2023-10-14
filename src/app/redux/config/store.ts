import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer } from "features/books";
import { bookReducer } from "features/books";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { bookDetailsReducer } from "features/card";

export const store = configureStore({
	reducer: {
		books: bookReducer,
		filters: filtersReducer,
		bookDetails: bookDetailsReducer,
	}
})

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

