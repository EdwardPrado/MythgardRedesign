import logo from "./logo.svg";
import "./App.css";

import Header from "./components/Header/Header";
import NewsLetter from "./components/NewsLetter/NewsLetter";
import Footer from "./components/Footer/Footer";

function App() {
	return (
		<div className="App">
			<Header />

			<NewsLetter />
			<Footer />
		</div>
	);
}

export default App;
