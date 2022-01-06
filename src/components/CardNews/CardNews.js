import React from "react";
import "./cardNews.scss";

import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";

const CardNews = (props) => {
	return (
		<Link
			to={{
				pathname: `/news/post?articleId=${props.articleId}`,
			}}
			style={{ textDecoration: "none" }}
		>
			<div class="card-news">
				{props.background === undefined || props.background === "" ? (
					<Skeleton variant="rectangular" width={350} height={180} />
				) : (
					<img src={props.background} alt="" loading="lazy"></img>
				)}
				<div class="card-news_content">
					{props.date === undefined ? <Skeleton animation="wave" height={10} width="30%" /> : <span>{props.date}</span>}
					{props.title === undefined ? <Skeleton animation="wave" height={40} width="100%" /> : <h5>{props.title}</h5>}
					{props.summary === undefined ? (
						<div>
							<Skeleton variant="text" />
							<Skeleton variant="text" />
							<Skeleton variant="text" />
						</div>
					) : (
						<p>{props.summary}</p>
					)}
				</div>
			</div>
		</Link>
	);
};

export default CardNews;
