import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import HeaderGame from "../../components/HeaderGame/HeaderGame";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import Footer from "../../components/Footer/Footer";

import "./news.scss";

const News = () => {
	return (
		<div>
			<HeaderCompany />
			<HeaderGame />
			<FeaturedNews />
			<Footer />
		</div>
	);
};

export default News;
