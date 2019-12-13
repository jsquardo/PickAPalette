export default {
	root: {
		background: "white",
		height: "100vh",
		width: "100vw",
		display: "flex",
		alignItems: "center",
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
		color: "black",
		fontSize: "1.25rem"
	},
	palettes: {
		boxSizing: "border-box",
		width: "100%",
		display: "grid",
		gridTemplateColumns: "repeat(3, 30%)",
		gridGap: "5%"
	}
};
