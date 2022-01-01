import React from "react";
import "./cardNews.scss";

import BackgroundPlaceholder from "../../assets/images/backgrounds/news-card-background_placeholder.png";

const CardNews = (props) => {
	return (
		<div class="card-news">
			<img src={BackgroundPlaceholder} alt="Placeholder"></img>
			<div class="card-news_content">
				<span>{props.date}</span>
				<h5>{props.title}</h5>
				<p>{props.summary}</p>
			</div>
		</div>
	);
};

export default CardNews;
