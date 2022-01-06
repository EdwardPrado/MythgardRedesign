import React, { useEffect, useState } from "react";
import axios from "axios";

import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import HeaderGame from "../../components/HeaderGame/HeaderGame";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import Footer from "../../components/Footer/Footer";

import CardNews from "../../components/CardNews/CardNews";

import "./news.scss";

const News = () => {
	const [newsCards, setNewsCards] = useState([<CardNews />, <CardNews />, <CardNews />]);

	//Runs only on initial page load to prevent call spam
	useEffect(() => {
		axios.get("/news/posts/").then((response) => {
			getNewsCards(response);
		});
	}, []);

	let getNewsCards = (newsArr) => {
		let cardsArr = [];

		for (let i = 0; i < newsArr.data.length; i++) {
			cardsArr.push(
				<CardNews
					date={newsArr.data[i].date}
					title={newsArr.data[i].name}
					summary={newsArr.data[i].summary}
					articleId={newsArr.data[i].articleId}
					background={"/images/news/thumbnail" + newsArr.data[i].background}
				/>
			);
		}

		//Reverse the array so the most recent news post is displayed first
		setNewsCards(cardsArr.reverse());

		return cardsArr;
	};

	return (
		<div>
			<HeaderCompany />
			<HeaderGame />
			<FeaturedNews />
			<section class="featured-news">
				<h3>Latest News</h3>
				<div class="featured-news_cards">{newsCards}</div>
			</section>
			<Footer />
		</div>
	);
};

export default News;
