import React from "react";
import "./footer.scss";

import MonumentalIcon from "../../assets/branding/Icon_Monumental.svg";

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer>
			<div class="footer_container">
				<section class="social-media">
					<a href="#">
						<ion-icon name="logo-twitter"></ion-icon>
					</a>
					<a href="#">
						<ion-icon name="logo-facebook"></ion-icon>
					</a>
					<a href="#">
						<ion-icon name="logo-instagram"></ion-icon>
					</a>
					<a href="#">
						<ion-icon name="logo-discord"></ion-icon>
					</a>
					<a href="#">
						<ion-icon name="logo-reddit"></ion-icon>
					</a>
				</section>
				<section class="footer_content">
					<img src={MonumentalIcon} alt="Monumental Icon." class="logo"></img>
					<div>
						<ul class="link-list">
							<b>Company</b>
							<li>
								<a href="https://monumental.io/">About Us</a>
							</li>
							<li>
								<a href="https://monumental.io/contact/">Contact Us</a>
							</li>
							<li>
								<a href="https://monumental.io/team/">Our Team</a>
							</li>
							<li>
								<a href="https://monumental.catsone.com/careers/">Careers</a>
							</li>
						</ul>
					</div>
				</section>
				<section class="legal">
					<div class="legal_links">
						<a href="#">Privacy policy</a>
						<a href="#">Terms of Service</a>
					</div>
					© 2018 - {currentYear} Rhino Games Inc.
				</section>
			</div>
		</footer>
	);
};

export default Footer;
