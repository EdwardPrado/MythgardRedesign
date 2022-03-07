import * as React from "react";
import "./badges.scss";

import BadgeSteam from "../../assets/badges/badge-steam.png";
import BadgeApple from "../../assets/badges/badge-apple.svg";
import BadgeAndroid from "../../assets/badges/badge-android.svg";

//TODO:
// -Update the badge images to be consistent size

const Badges = () => {
	return (
		<div className="badge-container">
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
	);
};

export default Badges;
