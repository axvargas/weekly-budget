import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
	paperI: {
		background: '#004e92',
		square: 'true',
		width: '75%',
		marginTop: '10px'
	},
	paperSuccess: {
		background: '#004e92',
		square: 'true',
		width: '75%',
		marginTop: '10px'
	},
	paperWarning: {
		background: '#999450',
		square: 'true',
		width: '75%',
		marginTop: '10px'
	},
	paperError: {
		background: '#ab5c5c',
		square: 'true',
		width: '75%',
		marginTop: '10px'
	},

	typo: {
		fontFamily: 'Raleway',

		color: 'white',

		fontSize: '1rem',
		fontWeight: '100',
		textAlign: 'center'

	},
	headLine: {
		textAlign: 'right',
	}

}));
export default useStyles;