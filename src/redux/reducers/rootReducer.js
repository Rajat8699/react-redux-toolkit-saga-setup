import { combineReducers } from "redux";
import usersSlice from "./users/usersSlice";
const rootReducer = combineReducers({
	usersSlice,
});

export default rootReducer;
