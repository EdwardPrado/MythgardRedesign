import * as React from "react";
import "./headerGame.scss";
import Badges from "../../components/Badges/Badges";

import MythgardIcon from "../../assets/branding/Icon_Mythgard-transparent.png";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import MenuLink from "@mui/material/Link";
import { styled } from "@mui/system";
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

const Backdrop = styled("div")`
	z-index: -1;
	position: fixed;
	right: 0;
	bottom: 0;
	top: 0;
	left: 0;
	background-color: rgba(0, 0, 0, 0.5);
	-webkit-tap-highlight-color: transparent;
`;

const style = {
	p: 2,
	px: 4,
	pb: 3,
};

const gamePages = [
	{
		name: "Home",
		link: "/",
	},
	{
		name: "News",
		link: "/news",
	},
	{
		name: "Support",
		link: "",
	},
];

const HeaderGame = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElNavGames, setAnchorElNavGames] = React.useState(null);

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenNavMenuGames = (event) => {
		setAnchorElNavGames(event.currentTarget);
	};

	const handleCloseNavMenuGames = () => {
		setAnchorElNavGames(null);
	};

	const [openPlayNow, setOpenPlayNow] = React.useState(false);
	const handlePlayNowOpen = () => setOpenPlayNow(true);
	const handlePlayNowClose = () => setOpenPlayNow(false);

	return (
		<AppBar position="sticky" className="myth-nav-game-wrapper">
			<Container className="myth-nav myth-nav-game">
				<Toolbar disableGutters>
					<Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
						<img src={MythgardIcon} className="myth-nav_logo" alt="Mythgard Logo."></img>
					</Typography>

					<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<IconButton
							size="large"
							aria-label="account of current user"
							aria-controls="menu-appbar"
							aria-haspopup="true"
							onClick={handleOpenNavMenuGames}
							color="inherit"
							sx={{ position: "Absolute", top: "0", bottom: "0", right: "0" }}
						>
							<MenuIcon />
						</IconButton>
						<Menu
							id="menu-appbar"
							anchorEl={anchorElNavGames}
							anchorOrigin={{
								vertical: "bottom",
								horizontal: "left",
							}}
							keepMounted
							transformOrigin={{
								vertical: "top",
								horizontal: "left",
							}}
							open={Boolean(anchorElNavGames)}
							onClose={handleCloseNavMenuGames}
							sx={{
								display: { xs: "block", md: "none" },
							}}
						>
							{gamePages.map((page) => (
								<MenuItem key={page.name} onClick={handleCloseNavMenuGames}>
									<MenuLink
										href={page.link}
										underline="hover"
										sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
									>
										{page.name}
									</MenuLink>
								</MenuItem>
							))}
							<Button
								key="PlayNow"
								sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
								onClick={handlePlayNowOpen}
							>
								Play Now
							</Button>
						</Menu>
					</Box>
					<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
						<img src={MythgardIcon} className="myth-nav_logo" alt="Mythgard Logo."></img>{" "}
					</Typography>
					<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
						{gamePages.map((page) => (
							<MenuItem key={page.name} onClick={handleCloseNavMenu}>
								<MenuLink
									href={page.link}
									underline="hover"
									sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
								>
									{page.name}
								</MenuLink>
							</MenuItem>
						))}
						<Button
							key="PlayNow"
							sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
							onClick={handlePlayNowOpen}
						>
							Play Now
						</Button>
					</Box>
				</Toolbar>
			</Container>
			<StyledModal
				aria-labelledby="play-now_modal-title"
				aria-describedby="play-now_modal-description"
				open={openPlayNow}
				onClose={handlePlayNowClose}
				BackdropComponent={Backdrop}
			>
				<Box sx={style} className="play-now">
					<h4>Play Now</h4>
					<p>Download Mythgard on your preferred platform</p>
					<Badges />
				</Box>
			</StyledModal>
		</AppBar>
	);
};

export default HeaderGame;
