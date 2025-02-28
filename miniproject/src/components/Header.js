import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import { withTranslation } from 'react-i18next';

const useStyles = makeStyles((theme) => ({
	'@global': {
		ul: {
			margin: 0,
			padding: 0
		},
		li: {
			listStyle: 'none'
		}
	},
	root: {
		width: 'fit-content',
		border: `1px solid ${theme.palette.divider}`,
		borderRadius: theme.shape.borderRadius,
		backgroundColor: theme.palette.background.paper,
		color: theme.palette.text.secondary,
		'& svg': {
			margin: theme.spacing(2)
		},
		'& hr': {
			margin: theme.spacing(0, 0.5)
		}
	},
	appBar: {
		borderBottom: `1px solid ${theme.palette.divider}`
	},
	toolbar: {
		flexWrap: 'wrap'
	},
	toolbarTitle: {
		flexGrow: 1
	},
	link: {
		margin: theme.spacing(1, 1.5)
	},
	heroContent: {
		padding: theme.spacing(8, 0, 6)
	},
	cardHeader: {
		backgroundColor: theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200]
	}
}));

function Header(props) {
	const classes = useStyles();
	const { i18n } = props;
	return (
		<React.Fragment>
			<CssBaseline />
			<AppBar position="static" color="inherit" elevation={0} className={classes.appBar}>
				<Toolbar className={classes.toolbar}>
					<Typography variant="h6" color="primary" noWrap className={classes.toolbarTitle}>
						<Link href="/">{props.t(`DETAIL.${'Bioskop'}`)}</Link>
					</Typography>
					<nav>
						<Grid container alignItems="center" className={classes.root}>
							<Link variant="button" color="inherit" className={classes.link}>
								<i className="fas fa-wallet" />
							</Link>
							<Divider orientation="vertical" />
							<Link variant="button" color="textPrimary" className={classes.link}>
								Rp. 100.000
							</Link>
						</Grid>
					</nav>
					<Button onClick={() => i18n.changeLanguage('en')} color="inherit">
						EN
					</Button>
					<Button onClick={() => i18n.changeLanguage('id')} color="inherit">
						ID
					</Button>
					<Link variant="button" color="textPrimary" href="#" className={classes.link}>
						<i className="fas fa-cart-plus" />
					</Link>
					<Button href="#" color="primary" variant="outlined" className={classes.link}>
						{props.t(`DETAIL.${'Login'}`)}
					</Button>
				</Toolbar>
			</AppBar>
		</React.Fragment>
	);
}

export default withTranslation('common')(Header);
