import { all } from "redux-saga/effects";
import users from "./users/users";
export default function* rootSaga() {
	yield all([users()]);
}
