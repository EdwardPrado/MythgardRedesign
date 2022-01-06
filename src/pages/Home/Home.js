import React from "react";

import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import HeaderGame from "../../components/HeaderGame/HeaderGame";
import Badges from "../../components/Badges/Badges";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

import BannerMythgard from "../../assets/branding/banner-mythgard.png";
import CardNorden from "./Home_Assets/Mimir_Reborn.png";
import CardDreni from "./Home_Assets/Vedma_Helicarrier.png";
import CardAztlan from "./Home_Assets/A56_Ahtatl.png";

import HighlightCard01 from "./Home_Assets/highlight_card-bg-01.jpg";
import HighlightCard02 from "./Home_Assets/highlight_card-bg-02.jpg";
import HighlightCard03 from "./Home_Assets/highlight_card-bg-03.png";

import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";

import "./home.scss";

const Home = () => {
	return (
		<div>
			<HeaderCompany />
			<HeaderGame />
			<section class="hero-container">
				<div class="hero-content-wrapper">
					<div class="hero-content">
						<img src={BannerMythgard} alt="Mythgard Logo."></img>
						<p>Welcome to Mythgard, a fantasy cyberpunk card game where heroes, gods, and mythical beasts meet.</p>
						<ButtonCTA text="Watch Trailer" link="https://www.youtube.com/watch?v=OpRfmRIWPc0" />
						<Badges />
					</div>
				</div>
			</section>
			<section class="banner-container expansion-container">
				<div class="banner_content">
					<div class="banner_content-text">
						<h6>NOW LIVE</h6>
						<h4>The Winter War</h4>
						<p>Do you side with the Alliance and control the board or fight from the shadows with the Rebellion?</p>
						<ButtonCTA text="Go to the Expansion Page" link="/expansion" />
					</div>
					<div class="card-container">
						<Card url={CardNorden} />
						<Card url={CardAztlan} />
						<Card url={CardDreni} />
					</div>
				</div>
			</section>
			<section class="highlight-container">
				<div class="highlight-card">
					<img src={HighlightCard01} alt="Placeholder"></img>
					<h4>Strategic Choice</h4>
					<div>
						<p>
							Experience a unique game with fast and fluid tactical action. Use spells, minions, artifacts, and
							enchantments to vanquish your foes. Every play could mark the difference between victory and defeat.
						</p>
						<p>Your deck isn’t restricted to a single faction, opening up a world of limitless possibilites.</p>
					</div>
				</div>
				<div class="highlight-card">
					<img src={HighlightCard02} alt="Placeholder"></img>
					<h4>Myth Made Real</h4>
					<div>
						<p>
							Gods of ancient legend walk the modern world in Mythgard. Many of the greatest deities have not been seen
							in millenia, but creatures of myth still rival for control.{" "}
						</p>
						<p>
							In Mythgard, players harness both the edge of technology and the magic of myth as they battle for
							dominance over the powers of an earlier age.
						</p>
					</div>
				</div>
				<div class="highlight-card">
					<img src={HighlightCard03} alt="PlaceHolder"></img>
					<h4>Countless Modes</h4>
					<div>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ornare tempus ante at viverra. Proin
							iaculis pretium nulla sed dapibus. Integer bibendum malesuada nulla, condimentum semper dui consectetur
							id.
						</p>
					</div>
				</div>
			</section>
			<section class="banner-container epic-container">
				<div class="banner_content">
					<div class="banner_content-text">
						<h4>Experience the Epic</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non aliquam elit, et vehicula tellus.
							Integer id nisl lacus.
						</p>
						<ButtonCTA text="Play Now" />
					</div>
				</div>
			</section>
			<section class="banner-container faction-container">
				<div class="banner_content faction_content">
					<div class="banner_content-text faction_content-text">
						<h4>Master and Combine 6 Factions</h4>
						<div class="faction-card-container">
							<div class="faction-card faction-card_norden">
								<div class="faction-card_content">
									<h4>Norden</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
							<div class="faction-card faction-card_parsa">
								<div class="faction-card_content">
									<h4>Parsa</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
							<div class="faction-card faction-card_aztlan">
								<div class="faction-card_content">
									<h4>Aztlan</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
							<div class="faction-card faction-card_dreni">
								<div class="faction-card_content">
									<h4>Dreni</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
							<div class="faction-card faction-card_harmony">
								<div class="faction-card_content">
									<h4>Harmony</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
							<div class="faction-card faction-card_oberos">
								<div class="faction-card_content">
									<h4>Oberos</h4>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			<FeaturedNews />
			<div class="featured-news_btn-container">
				<Link
					to={{
						pathname: "/news",
					}}
					className="btn-cta"
					style={{ textAlign: "center" }}
				>
					View All News
				</Link>
			</div>
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Home;
