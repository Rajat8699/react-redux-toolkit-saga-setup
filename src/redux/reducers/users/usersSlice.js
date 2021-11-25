import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const usersSlice = createSlice({
	name: "tests",
	initialState: {
		list: [],
		status: null,
	},
	reducers: {
		handleGetUsersRequest(state, action) {
			return { ...state, list: action.payload };
		},
	},
});
export const { handleGetUsersRequest } = usersSlice.actions;
export default usersSlice.reducer;
