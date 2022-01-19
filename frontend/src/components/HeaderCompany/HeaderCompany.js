import * as React from "react";
import "./headerCompany.scss";

import MonumentalIcon from "../../assets/branding/Icon_Monumental.svg";

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
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

const HeaderCompany = () => {
	const [anchorElNav, setAnchorElNav] = React.useState(null);
	const [anchorElNavDropdownMenu, setAnchorElNavDropdownMenu] = React.useState(null);
	const open = Boolean(anchorElNavDropdownMenu);

	const handleCloseNavMenu = () => {
		setAnchorElNav(null);
	};

	const handleNavDropdownMenuClick = (event) => {
		setAnchorElNavDropdownMenu(event.currentTarget);
	};

	const handleNavDropdownMenuClose = (event) => {
		setAnchorElNavDropdownMenu(null);
	};

	return (
		<div>
			<AppBar position="static" class="myth-nav-company-wrapper">
				<Container className="myth-nav myth-nav-company">
					<Toolbar disableGutters>
						<Typography variant="h6" noWrap component="div" sx={{ mr: 2, display: { xs: "none", md: "flex" } }}>
							<img src={MonumentalIcon} className="myth-nav_logo" alt="Monumental Studio Icon."></img>
						</Typography>

						<Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}></Box>
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
								<MenuItem>
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
		</div>
	);
};

export default HeaderCompany;
