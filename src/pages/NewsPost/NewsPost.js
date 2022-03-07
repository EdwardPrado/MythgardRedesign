import React, { useEffect, useState } from "react";
import axios from "axios";

import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import HeaderGame from "../../components/HeaderGame/HeaderGame";
import Footer from "../../components/Footer/Footer";

import Skeleton from "@mui/material/Skeleton";
import { Link } from "react-router-dom";

import "./newsPost.scss";
import HTMLReactParser from "html-react-parser";

const News = () => {
	const [newsArticle, setNewsArticle] = useState([]);
	const [articleContent, setArticleContent] = useState();
	const [background, setBackground] = useState({});

	//Runs only on initial page load to prevent call spam
	useEffect(() => {
		//Fixes issue where user is partially scrolled down the page when they open it
		window.scrollTo(0, 0);

		const params = new Proxy(new URLSearchParams(window.location.search), {
			get: (searchParams, prop) => searchParams.get(prop),
		});

		let articleId = params.articleId;

		axios.get(`https://mythgard-api.herokuapp.com/news/posts/?articleId=${articleId}`).then((response) => {
			setNewsArticle(response.data[0]);
			setArticleContent(parseArticle(response.data[0].article));
			setBackground({
				banner: response.data[0].banner,
				thumbnail: response.data[0].thumbnail,
			});
		});
	}, []);

	let parseArticle = (text) => {
		return HTMLReactParser(text);
	};

	return (
		<div>
			<HeaderCompany />
			<HeaderGame />
			<section class="news-article-wrapper">
				<Link
					to={{
						pathname: "/news",
					}}
					className="btn-back"
				>
					Back
				</Link>
				<article class="news-article">
					{newsArticle.date === undefined ? (
						<Skeleton animation="wave" height={10} width="30%" />
					) : (
						<span>{newsArticle.date}</span>
					)}
					{newsArticle.name === undefined ? (
						<Skeleton animation="wave" height={40} width="100%" />
					) : (
						<h4>{newsArticle.name}</h4>
					)}
					{background.banner === undefined || background.thumbnail === undefined ? (
						<Skeleton animation="wave" height={200} width="100%" />
					) : (
						<picture>
							<source srcset={background.banner} media="(min-width: 426px)"></source>
							<img src={background.thumbnail} alt="" loading="lazy"></img>
						</picture>
					)}
					{articleContent === undefined ? (
						<div>
							<Skeleton variant="text" />
							<Skeleton variant="text" />
							<Skeleton variant="text" />
							<br />
							<Skeleton variant="text" />
							<Skeleton variant="text" />
							<Skeleton variant="text" />
						</div>
					) : (
						articleContent
					)}
				</article>
			</section>
			<Footer />
		</div>
	);
};

export default News;
