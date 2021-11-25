import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { GET_USER } from "../redux/types";

const HomePage = (props) => {
	const dispatch = useDispatch();
	const list = useSelector((state) => state?.usersSlice?.list);
	console.log(list, "listtt");
	useEffect(() => {
		dispatch({ type: GET_USER });
	}, [dispatch]);
	return (
		<div>
			{(list || []).map((data, index) => (
				<h1 key={index}>{data?.title}</h1>
			))}
		</div>
	);
};

export default HomePage;
