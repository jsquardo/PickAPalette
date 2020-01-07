import sizes from "./sizes";
import bg from "../Assets/palettepattern.png";
export default {
	"@global": {
		".fade-exit": {
			opacity: 1
		},
		".fade-exit-active": {
			opacity: 0,
			transition: "opacity 500ms ease-out"
		}
	},
	root: {
		height: "100vh",
		display: "flex",
		alignItems: "flex-start",
		justifyContent: "center",
		/* background by SVGBackgrounds.com */
		backgroundColor: "#383c4a",
		// backgroundImage: `url(${bg})`,
		overflow: "hidden"
	},
	heading: {
		fontSize: "2rem"
	},
	container: {
		width: "50%",
		display: "flex",
		alignItems: "flex-start",
		flexDirection: "column",
		flexWrap: "wrap",
		[sizes.down("xl")]: {
			width: "80%"
		},
		[sizes.down("xs")]: {
			width: "75%"
		}
	},
	nav: {
		display: "flex",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		color: "white",
		"& a": {
			color: "#5294e2",
			fontSize: "1.25rem",
			fontWeight: "medium",
			textDecoration: "none",
			marginRight: "2.5%"
		}
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "2.5rem",
		[sizes.down("md")]: {
			gridTemplateColumns: "repeat(2, 50%)"
		},
		[sizes.down("xs")]: {
			gridTemplateColumns: "repeat(1, 100%)",
			gridGap: "1.4rem"
		}
	}
};
