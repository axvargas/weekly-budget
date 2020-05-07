import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({
    paperI:{
        background: '#004e92',
        square: 'true',
        width: '75%'
    },
    typo: {
        fontFamily: 'Raleway',

        color: 'white',

        fontSize:'1rem',
        fontWeight: '100',
        textAlign: 'center'

    },
    headLine:{
        textAlign: 'right',
    }

}));
export default useStyles;