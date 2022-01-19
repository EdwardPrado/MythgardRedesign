import Button from "@mui/material/Button";

import "./buttonCTA.scss";

const ButtonCTA = (props) => {
	return props.link ? (
		<a href={props.link} style={{ textDecoration: "none" }}>
			<Button
				variant="contained"
				sx={{
					backgroundColor: "#987942",
					fontWeight: "bold",
					fontFamily: "Hind",
					borderRadius: "0",
					lineHeight: "initial",
					":hover": {
						backgroundColor: "#987942",
					},
				}}
			>
				{props.text}
			</Button>
		</a>
	) : (
		<Button
			variant="contained"
			sx={{
				backgroundColor: "#987942",
				fontWeight: "bold",
				fontFamily: "Hind",
				borderRadius: "0",
				lineHeight: "initial",
				":hover": {
					backgroundColor: "#987942",
				},
			}}
		>
			{props.text}
		</Button>
	);
};

export default ButtonCTA;
