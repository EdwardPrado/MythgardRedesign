import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import FeaturedNews from "./components/FeaturedNews/FeaturedNews";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />
			<FeaturedNews />
			<NewsLetter />
			<Footer />
		</div>
	);
}

export default App;
