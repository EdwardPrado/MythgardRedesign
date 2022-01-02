import React from "react";
import "./newsLetter.scss";

import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";

const CssTextField = styled(TextField)({
	"& label.Mui-focused": {
		color: "#000",
	},
	"& .MuiInput-underline:after": {
		borderBottomColor: "#000",
	},
	"& .MuiOutlinedInput-root": {
		"& fieldset": {
			borderColor: "#000",
		},
		"&:hover fieldset": {
			borderColor: "#000",
		},
		"&.Mui-focused fieldset": {
			borderColor: "#000",
		},
	},
});

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
			<form>
				<CssTextField
					id="standard-basic"
					label="Standard"
					variant="standard"
					inputProps={{ style: { borderColor: "red" } }}
				/>
				<br />
				<a href="#" class="btn-cta">
					Sign Up
				</a>
			</form>
		</section>
	);
};

export default NewsLetter;
