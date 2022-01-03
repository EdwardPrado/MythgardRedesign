import * as React from "react";
import "./headerGame.scss";

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
						<Button key="PlayNow" sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}>
							Play Now
						</Button>
					</Box>
				</Toolbar>
			</Container>
		</AppBar>
	);
};

export default HeaderGame;
