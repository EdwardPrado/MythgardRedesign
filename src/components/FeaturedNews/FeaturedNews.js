import React, { useEffect, useState } from "react";
import axios from "axios";
import "./featuredNews.scss";

import CardNews from "../CardNews/CardNews";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const FeaturedNews = () => {
	const [featuredCards, setFeaturedCards] = useState([<CardNews />, <CardNews />, <CardNews />]);

	//Runs only on initial page load to prevent call spam
	useEffect(() => {
		axios.get("https://mythgard-api.herokuapp.com/news/posts/?isFeatured=true").then((response) => {
			getFeaturedCards(response);
		});
	}, []);

	let getFeaturedCards = (newsArr) => {
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
		setFeaturedCards(cardsArr.reverse());

		return cardsArr;
	};

	return (
		<section class="featured-news">
			<h3>Featured News</h3>
			<div class="featured-news_cards">{featuredCards}</div>
		</section>
	);
};

export default FeaturedNews;
