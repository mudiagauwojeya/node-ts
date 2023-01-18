import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../../../types/userType";

type initialState = {
	loading: boolean;
	error: string;
	user: User;
};

const initialState: initialState = {
	loading: false,
	error: "",
	user: {} as User,
};

export const getUser = createAsyncThunk("user/getUser", async (url: string) => {
	const response = await axios.get(url);
	return response.data;
});

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getUser.pending, (state) => {
			state.loading = true;
		}),
			builder.addCase(
				getUser.fulfilled,
				(state, action: PayloadAction<User>) => {
					(state.loading = false),
						(state.user = action.payload),
						(state.error = "");
				}
			),
			builder.addCase(getUser.rejected, (state, action) => {
				(state.loading = false),
					(state.user = {} as User),
					(state.error = action.error.message || "Something went wrong!");
			});
	},
});

export default userSlice.reducer;
