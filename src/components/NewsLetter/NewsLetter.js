import React from "react";
import "./newsLetter.scss";

import Form from "react-bootstrap/Form";

const NewsLetter = () => {
	return (
		<section class="newsletter">
			<div class="newsletter_text">
				<h3>Get the Latest Mythgard News</h3>
				<p>
					Signup and instantly get a <b>free core pack and “Axolotl Flex” flex emote</b> alongside the latest news,
					updates, promo codes, and more.
				</p>
			</div>
			<Form>
				<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
					<Form.Label>Email Address</Form.Label>
					<Form.Control type="email" placeholder="name@example.com" />
				</Form.Group>
				<a href="#" class="btn-cta">
					Sign Up
				</a>
			</Form>
		</section>
	);
};

export default NewsLetter;
