import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/styles';
import background from './Assets/ahoy.jpg';

const styles = {
	root: {
		background: `url(${background})`,
		height: '100vh',
		width: '100vw',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	container: {
		width: '50%',
		display: 'flex',
		alignItems: 'flex-start',
		flexDirection: 'column',
		flexWrap: 'wrap',
		marginBottom: '3rem'
	},
	nav: {
		display: 'flex',
		width: '100%',
		justifyContent: 'space-between',
		color: 'black',
		fontSize: '1.25rem'
	},
	palettes: {
		boxSizing: 'border-box',
		width: '100%',
		display: 'grid',
		gridTemplateColumns: 'repeat(3, 30%)',
		gridGap: '5%'
	}
};

class PaletteList extends Component {
	goToPalette(id) {
		this.props.history.push(`/palette/${id}`);
	}

	render() {
		const { palettes, classes } = this.props;

		return (
			<div className={classes.root}>
				<div className={classes.container}>
					<nav className={classes.nav}>
						<h1>React Color Palette</h1>
					</nav>
					<div className={classes.palettes}>
						{palettes.map(palette => (
							<MiniPalette
								{...palette}
								handleClick={() => this.goToPalette(palette.id)}
							/>
						))}
					</div>
				</div>
			</div>
		);
	}
}

export default withStyles(styles)(PaletteList);
