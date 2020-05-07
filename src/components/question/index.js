import React, { Fragment, useState } from 'react';
import { Typography, InputAdornment, TextField, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';

import PropTypes from 'prop-types';
import useStyle from './style';
const Question = ({ setBudget, setDifference, setLogged }) => {
    const classes = useStyle();
    const { enqueueSnackbar } = useSnackbar();

    const initialBudget = 0;
    const [inBudget, setInBudget] = useState(initialBudget);
    const [error, setError] = useState(false);

    const validateBudget = (inputBudget) => {
        if (inputBudget <= 0 || isNaN(inputBudget)) {
            return false;
        }
        //case it passes
        return true;
    }

    const handleChangeBudget = (event) => {
        //Validate
        let inputBudget = parseInt(event.target.value, 10);
        console.log('changing');
        if (validateBudget(inputBudget)) {
            setInBudget(inputBudget);
            setError(false);
        } else {
            setInBudget(inputBudget);
            setError(true);
        }
        console.log("%cBudget: " + inBudget, 'color: Orange');



    }


    const handleSubmitBudget = (event) => {
        event.preventDefault();
        if (validateBudget(inBudget)) {
            setError(false);
            setBudget(inBudget);
            setDifference(inBudget);
            setLogged(true);
            enqueueSnackbar(
                `The budget has been defined`,
                {
                    variant: 'success',
                    autoHideDuration: 5000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                });
        } else {
            setError(true);
            enqueueSnackbar(
                `The entry value is not valid`,
                {
                    variant: 'error',
                    autoHideDuration: 5000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                });
        }
        console.log("%cBudget: " + inBudget, 'color: blue')
    }

    return (
        <Fragment>
            

                <form onSubmit={handleSubmitBudget}>

                    <Typography variant="h3" gutterBottom>Budget</Typography>

                    {error ?
                        <TextField
                            type="number"
                            error
                            id="standard-error-helper-text"
                            className={classes.textField}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            defaultValue="Hello World"
                            helperText="Incorrect entry."
                            onChange={handleChangeBudget}
                        />
                        :
                        <TextField
                            type="number"
                            id="standard-start-adornment"
                            className={classes.textField}
                            InputProps={{
                                startAdornment: <InputAdornment position="start">$</InputAdornment>,
                            }}
                            placeholder="Define your weekly budget here"
                            onChange={handleChangeBudget}
                        />
                    }

                    <Button className={classes.button} type="submit">Define budget</Button>

                </form>

       
        </Fragment>


    );
}

Question.propTypes = { 
    setBudget: PropTypes.func.isRequired,
    setDifference: PropTypes.func.isRequired, 
    setLogged: PropTypes.func.isRequired
}
;

export default Question;
