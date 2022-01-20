import React, { useEffect, useState } from "react";
import axios from "axios";
import "./expansion.scss";

import HeaderCompany from "../../components/HeaderCompany/HeaderCompany";
import HeaderGame from "../../components/HeaderGame/HeaderGame";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import ButtonCTA from "../../components/ButtonCTA/ButtonCTA";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Expansion = () => {
	const [cards, setCards] = useState([<Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />, <Card />]);
	const [filteredFaction, setFilteredFaction] = useState("All");
	const [queryPage, setQueryPage] = useState(1);
	const [hasMore, setHasMore] = useState(true);

	let apiCall = () => {
		if (filteredFaction === "All") {
			axios({
				method: "GET",
				url: "/api/cards",
				params: { faction: filteredFaction, pageNumber: queryPage },
			}).then((response) => {
				getCards(response);
			});
		} else {
			axios({
				method: "GET",
				url: "/api/cards",
				params: { faction: filteredFaction },
			}).then((response) => {
				getCards(response);
			});
		}
	};

	let getCards = (res) => {
		let cardCompArr = [];

		if (queryPage !== 1 && filteredFaction === "All") {
			cardCompArr = cards;
		} else {
			setCards([]);
		}

		for (let i = 0; i < res.data.length; i++) {
			cardCompArr.push(
				<Card
					url={"/images/cards/" + res.data[i].assets[0].gameAbsolutePath}
					name={res.data[i].name}
					type={res.data[i].type}
					rarity={res.data[i].rarity}
					faction={res.data[i].faction}
					flavorText={res.data[i].flavorText}
					collectible={res.data[i].collectible}
				/>
			);
		}

		setCards(cardCompArr);

		if (queryPage !== 1 && filteredFaction === "All") {
			//setCards as cards is done to fix an issue where the hook wasn't showing an updated view of the cards it contained
			setCards([cards]);
		}

		return cardCompArr;
	};

	const handleFactionChange = (event) => {
		if (event.target.value === "All") {
			setQueryPage(1);
			setFilteredFaction(event.target.value);
		} else {
			setFilteredFaction(event.target.value);
		}
	};

	const handleMoreClick = () => {
		setQueryPage(queryPage + 1);
	};

	//Runs each time filteredFaction or queryPage changes
	useEffect(() => {
		if (queryPage === 4) {
			setHasMore(false);
		} else {
			setHasMore(true);
		}
		apiCall();
	}, [filteredFaction, queryPage]);

	return (
		<div>
			<HeaderCompany />
			<HeaderGame />
			<section class="expansion-hero-container">
				<div class="expansion-hero-content-wrapper">
					<div class="expansion-hero-content">
						<h2>The Winter War</h2>
						<h4>Alliance V.S. Rebellion</h4>
						<p>Do you side with the Alliance and control the board or fight from the shadows with the Rebellion?</p>
					</div>
				</div>
			</section>
			<div class="expansion_center">
				<FormControl sx={{ m: 1, minWidth: 120 }}>
					<InputLabel id="simple-select-label">Faction</InputLabel>
					<Select
						labelId="simple-select-label"
						id="simple-select"
						value={filteredFaction}
						label="Faction"
						onChange={handleFactionChange}
					>
						<MenuItem value="All">All</MenuItem>
						<MenuItem value="Norden">Norden</MenuItem>
						<MenuItem value="Aztlan">Aztlan</MenuItem>
						<MenuItem value="Parsa">Parsa</MenuItem>
						<MenuItem value="Dreni">Dreni</MenuItem>
						<MenuItem value="Oberos">Oberos</MenuItem>
						<MenuItem value="Harmony">Harmony</MenuItem>
					</Select>
				</FormControl>
			</div>
			<div class="expansion-card-container">{cards}</div>
			{hasMore & (filteredFaction === "All") ? (
				<div class="faction-selector">
					<span class="expansion_center" onClick={handleMoreClick}>
						<ButtonCTA text="Load More"></ButtonCTA>
					</span>
				</div>
			) : null}
			<Footer />
		</div>
	);
};

export default Expansion;
