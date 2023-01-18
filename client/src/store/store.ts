import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import userReducer from "./slices/user/userSlice";

export const store = configureStore({
	reducer: { user: userReducer },
});

// type the state
export type RootState = ReturnType<typeof store.getState>;

// type the dispatch
export type AppDispatch = typeof store.dispatch;
