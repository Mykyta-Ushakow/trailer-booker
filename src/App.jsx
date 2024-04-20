import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import CataloguePage from "./pages/CataloguePage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";

function App() {
	return (
		<div>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/catalogue" element={<CataloguePage />} />
				<Route path="/favorites" element={<FavoritesPage />} />
			</Routes>
		</div>
	);
}

export default App;
