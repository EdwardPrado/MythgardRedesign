import React from "react";
import "./featuredNews.scss";

import CardNews from "../CardNews/CardNews";

const FeaturedNews = () => {
	return (
		<section class="featured-news">
			<h3>Featured News</h3>
			<div class="featured-news_cards">
				<CardNews
					date="Dec 1, 2021"
					title="Dec Placeholder News Card Text"
					summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi placerat ipsum in felis malesuada, nec ornare erat mollis."
				/>
				<CardNews
					date="Feb 1, 2021"
					title="Feb Placeholder News Card Text"
					summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at lectus sit amet nisl feugiat luctus"
				/>
				<CardNews
					date="Oct 1, 2021"
					title="Oct Placeholder News Card Text"
					summary="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at lectus sit amet nisl feugiat luctus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur."
				/>
			</div>
			<a href="#" class="btn-cta">
				View All News
			</a>
		</section>
	);
};

export default FeaturedNews;
