import * as React from "react";
import "./header.scss";

import MonumentalIcon from "../../assets/branding/Icon_Monumental.svg";
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
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MenuLink from "@mui/material/Link";

const companyPages = [
	{
		name: "Team",
		link: "https://monumental.io/team/",
	},
	{
		name: "Contact",
		link: "https://monumental.io/contact/",
	},
	{
		name: "Careers",
		link: "https://monumental.catsone.com/careers/",
	},
];
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

const Header = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElNavGames, setAnchorElNavGames] = React.useState(null);
	const [anchorElNavDropdownMenu, setAnchorElNavDropdownMenu] = React.useState(null);
	const open = Boolean(anchorElNavDropdownMenu);

	const handleOpenNavMenu = (event) => {
		setAnchorElNav(event.currentTarget);
	};

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleOpenNavMenuGames = (event) => {
		setAnchorElNavGames(event.currentTarget);
	};

	const handleCloseNavMenuGames = () => {
		setAnchorElNavGames(null);
	};

	const handleNavDropdownMenuClick = (event) => {
		setAnchorElNavDropdownMenu(event.currentTarget);
	};

	const handleNavDropdownMenuClose = (event) => {
		setAnchorElNavDropdownMenu(null);
	};

	return (
		<div>
			<AppBar position="static" className="myth-nav-company-wrapper">
				<Container className="myth-nav myth-nav-company">
					<Toolbar disableGutters>
						<Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
							<img src={MonumentalIcon} className="myth-nav_logo" alt="Monumental Studio Icon."></img>
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleOpenNavMenu}
								color="inherit"
							>
								<MenuIcon />
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorElNav}
								anchorOrigin={{
									vertical: "bottom",
									horizontal: "left",
								}}
								keepMounted
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								open={Boolean(anchorElNav)}
								onClose={handleCloseNavMenu}
								sx={{
									display: { xs: "block", md: "none" },
								}}
							>
								<Button
									id="games-dropdown"
									aria-controls={open ? "games-dropdown_menu" : undefined}
									aria-haspopup="true"
									aria-expanded={open ? "true" : undefined}
									onClick={handleNavDropdownMenuClick}
									endIcon={<KeyboardArrowDownIcon />}
								>
									Games
								</Button>
								<Menu
									id="company-dropdown_menu"
									aria-labelledby="company-dropdown"
									anchorEl={anchorElNavDropdownMenu}
									open={open}
									onClose={handleNavDropdownMenuClose}
									anchorOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
									transformOrigin={{
										vertical: "top",
										horizontal: "left",
									}}
								>
									<MenuItem>
										<Link
											to={{
												pathname: "/",
											}}
										>
											Mythgard
										</Link>
									</MenuItem>
									<MenuItem>
										<a href="https://monumental.io/games/storm-wars/">Storm Wars</a>
									</MenuItem>
									<MenuItem>
										<a href="https://monumental.io/games/looty-dungeon/">Looty Dungeon</a>
									</MenuItem>
									<MenuItem>
										<a href="https://monumental.io/games/little-alchemist/">Little Alchemist</a>
									</MenuItem>
								</Menu>
								{companyPages.map((page) => (
									<MenuItem key={page.name} onClick={handleCloseNavMenu}>
										<MenuLink
											href={page.link}
											underline="hover"
											sx={{ color: "#fff", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
										>
											{page.name}
										</MenuLink>
									</MenuItem>
								))}
							</Menu>
						</Box>
						<Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
							<img src={MonumentalIcon} className="myth-nav_logo" alt="Monumental Studio Icon."></img>
						</Typography>
						<Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
							<Button
								id="games-dropdown"
								aria-controls={open ? "games-dropdown_menu" : undefined}
								aria-haspopup="true"
								aria-expanded={open ? "true" : undefined}
								onClick={handleNavDropdownMenuClick}
								endIcon={<KeyboardArrowDownIcon />}
								sx={{ color: "#fff", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
							>
								Games
							</Button>
							<Menu
								id="company-dropdown_menu"
								aria-labelledby="company-dropdown"
								anchorEl={anchorElNavDropdownMenu}
								open={open}
								onClose={handleNavDropdownMenuClose}
								anchorOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								transformOrigin={{
									vertical: "top",
									horizontal: "left",
								}}
								sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
							>
								{/* <MenuItem>
									<MenuLink
										href="https://monumental.io/games/mythgard/"
										underline="hover"
										sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
									>
										Mythgard
									</MenuLink>
								</MenuItem>
								<MenuItem>
									<MenuLink
										href="https://monumental.io/games/storm-wars/"
										underline="hover"
										sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
									>
										Storm Wars
									</MenuLink>
								</MenuItem>
								<MenuItem>
									<MenuLink
										href="https://monumental.io/games/looty-dungeon/"
										underline="hover"
										sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
									>
										Looty Dungeon
									</MenuLink>
								</MenuItem>
								<MenuItem>
									<MenuLink
										href="https://monumental.io/games/little-alchemist/"
										underline="hover"
										sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
									>
										Little Alchemist
									</MenuLink>
								</MenuItem> */}

								<MenuItem>
									<Link
										to={{
											pathname: "/",
										}}
									>
										Mythgard
									</Link>
								</MenuItem>
								<MenuItem>
									<a href="https://monumental.io/games/storm-wars/">Storm Wars</a>
								</MenuItem>
								<MenuItem>
									<a href="https://monumental.io/games/looty-dungeon/">Looty Dungeon</a>
								</MenuItem>
								<MenuItem>
									<a href="https://monumental.io/games/little-alchemist/">Little Alchemist</a>
								</MenuItem>
							</Menu>
							{companyPages.map((page) => (
								<MenuItem key={page.name} onClick={handleCloseNavMenu}>
									<MenuLink
										href={page.link}
										underline="hover"
										sx={{ color: "#fff", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
									>
										{page.name}
									</MenuLink>
								</MenuItem>
							))}
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
			<AppBar position="sticky">
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
							<Button
								key="PlayNow"
								sx={{ color: "#000", fontWeight: "bold", fontFamily: "Open Sans", fontSize: "14px" }}
							>
								Play Now
							</Button>
						</Box>
					</Toolbar>
				</Container>
			</AppBar>
		</div>
	);
};

export default Header;
