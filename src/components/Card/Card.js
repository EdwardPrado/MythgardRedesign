import * as React from "react";

import "./Card.scss";

import Skeleton from "@mui/material/Skeleton";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
	position: fixed;
	z-index: 1300;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const CardBackdrop = styled("div")`
	z-index: -1;
	position: fixed;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.8);
	-webkit-tap-highlight-color: transparent;
`;

const cardStyle = {
	p: 2,
	px: 4,
	pb: 3,
	outline: "none",
};

const Card = (props) => {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			{props.url === undefined ? (
				<div className="card">
					<Skeleton variant="rectangular" width="100%" height="100%" />
				</div>
			) : (
				<img className="card" src={props.url} alt={props.name + " playing card."} onClick={handleOpen}></img>
			)}

			<StyledModal
				aria-labelledby="card-modal-title"
				aria-describedby="card-modal-description"
				open={open}
				onClose={handleClose}
				BackdropComponent={CardBackdrop}
				className="card-modal-wrapper"
			>
				<Box sx={cardStyle} className="card-modal">
					<img className="card" src={props.url} alt={props.name + " playing card."}></img>
					<div className="card-modal_content">
						<h3 id="card-modal-title">{props.name}</h3>
						<ul>
							<li>
								<b>Type: </b>
								{props.type}
							</li>
							<li>
								<b>Rarity: </b>
								{props.rarity}
							</li>
							<li>
								<b>Faction: </b>
								{props.faction}
							</li>
							<li>{props.collectible ? <b>Collectible</b> : <b>Non-Collectible</b>}</li>
						</ul>
						<p>{props.flavorText}</p>
					</div>
				</Box>
			</StyledModal>
		</div>
	);
};

export default Card;
