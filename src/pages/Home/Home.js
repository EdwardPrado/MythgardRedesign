import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import HeaderGame from "../../components/HeaderGame/HeaderGame";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

const Home = () => {
	return (
		<div>
			<HeaderCompany />
			<HeaderGame />
			<FeaturedNews />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Home;
