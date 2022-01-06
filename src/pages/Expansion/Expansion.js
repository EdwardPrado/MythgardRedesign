import React, { useEffect, useState } from "react";
import axios from "axios";
import "./expansion.scss";

import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import HeaderGame from "../../components/HeaderGame/HeaderGame";
import Badges from "../../components/Badges/Badges";
import Footer from "../../components/Footer/Footer";

const Expansion = () => {
	const [featuredCards, setFeaturedCards] = useState([]);

	//Runs only on initial page load to prevent call spam
	useEffect(() => {
		// axios.get("/news/posts/?isFeatured=true").then((response) => {
		// 	getFeaturedCards(response);
		// });
	}, []);

	return (
		<div>
			<HeaderCompany />
			<HeaderGame />
			<Footer />
		</div>
	);
};

export default Expansion;
