import React from "react";
import "./header.scss";

import MonumentalIcon from "../../assets/branding/Icon_Monumental.svg";
import MythgardIcon from "../../assets/branding/Icon_Mythgard.png";

import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

const Header = () => {
	return (
		<div>
			<Navbar bg="dark" expand="lg" className="myth-nav myth-nav-company">
				<Container>
					<Navbar.Brand href="https://monumental.io/">
						<img src={MonumentalIcon} className="myth-nav_logo"></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<NavDropdown title="Games" id="basic-nav-dropdown">
								<NavDropdown.Item href="#">Mythgard</NavDropdown.Item>
								<NavDropdown.Item href="https://monumental.io/games/storm-wars/">Storm Wars</NavDropdown.Item>
								<NavDropdown.Item href="https://monumental.io/games/looty-dungeon/">Looty Dungeon</NavDropdown.Item>
								<NavDropdown.Item href="https://monumental.io/games/little-alchemist/">
									Little Alchemist
								</NavDropdown.Item>
							</NavDropdown>
							<Nav.Link href="https://monumental.io/team/">Team</Nav.Link>
							<Nav.Link href="https://monumental.io/contact/">Contact</Nav.Link>
							<Nav.Link href="https://monumental.catsone.com/careers/">Careers</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>
			<Navbar sticky="top" expand="lg" className="myth-nav myth-nav-game">
				<Container>
					<Navbar.Brand href="/">
						<img src={MythgardIcon} className="myth-nav_logo"></img>
					</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link href="/">Home</Nav.Link>
							<Nav.Link href="#link">News</Nav.Link>
							<Nav.Link href="#link">Support</Nav.Link>
						</Nav>
					</Navbar.Collapse>
					<Navbar.Collapse className="justify-content-end">
						<Navbar.Text>
							<Nav.Link href="#link" class="btn-cta">
								Play Free
							</Nav.Link>
						</Navbar.Text>
					</Navbar.Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Header;
