import { makeStyles } from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    root: {
        width: '100%',
        flexGrow: 1,
        margin: '0px' //ojo

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        borderRadius: '10px',
        width: '75%',
    },
    grid: {
        width: '100%',
        margin: '0px'
    },
}));
export default useStyles;