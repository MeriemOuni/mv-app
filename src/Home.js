import React from "react";
import App from "./App";
import { Route, Routes } from "react-router-dom";
import MovDescription from "./Components/MovDescription";
import Error from "./Components/Error";
import NavgationBar from "./Components/NavgationBar";

const Home = () => {
	return (
		<div>
			<NavgationBar />
			<Routes>
				<Route path='/' element={<App />} />
				<Route path='/movie/:id' element={<MovDescription />} />
				<Route path='/*' element={<Error />} />
			</Routes>
		</div>
	);
};

export default Home;
