import background from "../Assets/palettepattern.png";

export default {
	root: {
		background: `url(${background})`,
		height: "100vh",
		width: "100vw",
		display: "flex",
		// alignItems: "center",
		justifyContent: "center"
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		marginBottom: "3rem"
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
<<<<<<< Updated upstream
		alignItems: "center",
		color: "black",
		fontSize: "1.25rem",
		"& a": {
			color: "black"
		}
=======
		color: "white",
		fontSize: "1.25rem"
>>>>>>> Stashed changes
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "5%"
	}
};
