import { call, put, takeLatest, all } from "redux-saga/effects";
import { handleGetUsersRequest } from "../../reducers/users/usersSlice";
import axios from "../../../utils/axiosInterceptors";
import { GET_USER } from "../../types";

//getuserapi
function getuserApi(action) {
	return axios.get("https://jsonplaceholder.typicode.com/posts");
}
function* users(action) {
	try {
		const resp = yield call(getuserApi, action);
		yield put(handleGetUsersRequest(resp.data));
	} catch (resp) {
		yield put(handleGetUsersRequest(resp.data));
	}
}

function* home() {
	yield all([takeLatest(GET_USER, users)]);
}
export default home;
