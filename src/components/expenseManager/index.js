import React, { Fragment } from 'react';
import { Typography, Paper, Grid } from '@material-ui/core'
import useStyle from './style';
import PropTypes from 'prop-types';
const ExpenseManager = ({budget, difference}) => {
    const classes = useStyle();
    const checkClass = (budget, remain) => {
        let staticClass = classes.paperSuccess;
        if ((budget / 4) > remain){
            staticClass = classes.paperError;
        }else if((budget/2)>remain){
            staticClass = classes.paperWarning
        }else{
            staticClass = classes.paperSuccess
        }
        return staticClass;
    }

    let remainClass = checkClass(budget,difference);
    return (
        <Fragment>
            <Grid container justify="center">
                <Paper className={classes.paperI}>
                    <Typography variant="h6" className={classes.typo}>Budget: ${budget}</Typography>
                </Paper>


                <Paper className={remainClass}>
                    <Typography variant="h6" className={classes.typo}>Remain: ${difference}</Typography>
                </Paper>
            </Grid>
        </Fragment>
    );
}

ExpenseManager.propTypes = {
    budget: PropTypes.number.isRequired,
    difference: PropTypes.number.isRequired
};


export default ExpenseManager;
