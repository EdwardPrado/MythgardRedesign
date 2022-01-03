import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import HeaderGame from "../../components/HeaderGame/HeaderGame";
import FeaturedNews from "../../components/FeaturedNews/FeaturedNews";
import NewsLetter from "../../components/NewsLetter/NewsLetter";
import Footer from "../../components/Footer/Footer";

import BannerMythgard from "../../assets/branding/banner-mythgard.png";
import BadgeSteam from "./Home_Assets/badges/badge-steam.png";
import BadgeApple from "./Home_Assets/badges/badge-apple.svg";
import BadgeAndroid from "./Home_Assets/badges/badge-android.svg";
import HighlightCard01 from "./Home_Assets/highlight_card-bg-01.jpg";
import HighlightCard02 from "./Home_Assets/highlight_card-bg-02.jpg";
import HighlightCard03 from "./Home_Assets/highlight_card-bg-03.png";

import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";

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
						<div class="badge-container">
							<a href="https://store.steampowered.com/app/839910/Mythgard/?utm_source=www.mythgardgame.com">
								<img src={BadgeSteam} alt="Available on the Steam Store indicator."></img>
							</a>
							<a href="https://play.google.com/store/apps/details?id=com.rhinogamesinc.mythgard">
								<img src={BadgeApple} alt="Available on the Google Play Store indicator."></img>
							</a>
							<a href="https://apps.apple.com/us/app/mythgard/id1404458505">
								<img src={BadgeAndroid} alt="Available for download on the App Store indicator."></img>
							</a>
						</div>
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
			<section class="epic-container">
				<div class="epic_content">
					<div class="epic_content-text">
						<h4>Experience the Epic</h4>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin non aliquam elit, et vehicula tellus.
							Integer id nisl lacus.
						</p>
						<ButtonCTA text="Play Now" />
					</div>
				</div>
			</section>
			<FeaturedNews />
			<NewsLetter />
			<Footer />
		</div>
	);
};

export default Home;
