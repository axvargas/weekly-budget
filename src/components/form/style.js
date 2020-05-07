import {makeStyles} from '@material-ui/core';
const useStyles = makeStyles((theme) => ({

    root: {
        width: '100%',
        flexGrow: 1,
        margin: '0px' //ojo
        
    },
    grid: {
        width: '100%',
        margin: '0px' 
    },
    
    textField:{
        width: "100%",
        marginBottom: "20px"
    },
    button:{
        marginTop: 15,
        width: "100%",
        background: '#5b6a80 !important',
        color: 'white !important',
        fontFamily: 'Raleway',
        textTransform: 'none',
        marginBottom: '25px',
        "&:hover": {
            background: "#004e92 !important",
        },
    }
}));
export default useStyles;