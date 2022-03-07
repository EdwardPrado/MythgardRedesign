import "./App.css";
import React from "react";

import { HashRouter } from "react-router-dom";
import { BrowserRouter as Switch, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import News from "./pages/News/News";
import NewsPost from "./pages/NewsPost/NewsPost";
import Expansion from "./pages/Expansion/Expansion";
import NotFound from "./pages/NotFound/NotFound";

function App() {
	return (
		<HashRouter basename="/">
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/news" element={<News />} />
				<Route exact path="/news/post" element={<NewsPost />} />
				<Route exact path="/expansion" element={<Expansion />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
