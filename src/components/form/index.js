import React, { useState } from 'react';
import { Typography, InputAdornment, TextField, Button } from '@material-ui/core';
import { useSnackbar } from 'notistack';
import shortid from 'shortid';
import useStyle from './style';

import PropTypes from 'prop-types';
const Form = ({ setcreatedExpense, setWasCreated }) => {
    const classes = useStyle();
    const { enqueueSnackbar } = useSnackbar();

    //States
    const initialReason = '';
    const initialExpense = '';
    const initialErrors = {
        reason: false,
        expense: false
    };
    const [reason, setReason] = useState(initialReason);
    const [expense, setExpense] = useState(initialExpense);
    const [errors, setErrors] = useState(initialErrors);

    const validateExpense = (inputExpense) => {
        if (inputExpense.trim() <= 0) {
            return false;
        }
        //case it passes
        return true;
    }
    const validateReason = (inputReason) => {
        if (inputReason.trim() === '') {
            return false;
        }
        //case it passes
        return true;
    }

    const handleChangeReason = (event) => {
        console.log('HANDLING REASON');
        let inputReason = event.target.value;
        console.log("REASON: " + inputReason);

        if (validateReason(inputReason)) {
            console.log('SI PASE REASON');
            setReason(inputReason);
            setErrors({
                ...errors,
                reason: false
            });
        } else {
            console.log('NO PASE REASON')
            setReason(inputReason);
            setErrors({
                ...errors,
                reason: true
            });
        }


    }

    const handleChangeExpense = (event) => {
        console.log('HANDLING EXPENSE')
        const inputExpense = event.target.value;
        console.log("EXPENSE: " + inputExpense);
        if (validateExpense(inputExpense)) {
            console.log('SI PASE Expense');
            setExpense(inputExpense);
            setErrors({
                ...errors,
                expense: false
            });
        } else {
            console.log('NO PASE Expense');
            setExpense(inputExpense);
            setErrors({
                ...errors,
                expense: true
            });
        }

    }

    const submitForm = (event) => {
        event.preventDefault();

        //Validate
        const reasonVal = validateReason(reason);
        const expenseVal = validateExpense(expense);
        if (reasonVal && expenseVal) {
            setErrors({
                reason: !reasonVal,
                expense: !expenseVal
            });

            enqueueSnackbar(
                `Expense added`,
                {
                    variant: 'success',
                    autoHideDuration: 5000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                });

            //Generate a objectExpense
            const objectExpense = {
                reason,
                spending: parseInt(expense, 10),
                id: shortid.generate()
            };

            //Pass to the principal component
            setcreatedExpense(objectExpense);
            setWasCreated(true);

            //Reset Fields
            setReason('');
            setExpense('');
        } else {
            setErrors({
                reason: !reasonVal,
                expense: !expenseVal
            });
            enqueueSnackbar(
                `Check the inputs`,
                {
                    variant: 'error',
                    autoHideDuration: 5000,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'left',
                    },
                });
        }


    }
    return (
        <form onSubmit={submitForm}>
            <Typography variant="h3">Add your expenses</Typography>
            <Typography variant="h6">Reason</Typography>
            {!errors.reason ?
                <TextField
                    id="standard-basic"
                    className={classes.textField}
                    placeholder="Ex. Transportation"
                    value={reason}
                    onChange={handleChangeReason}
                />
                :
                <TextField
                    error
                    helperText="Incorrect entry."
                    id="standard-basic"
                    className={classes.textField}
                    placeholder="Ex. Transportation"
                    value={reason}
                    onChange={handleChangeReason}
                />

            }

            <Typography variant="h6">Expense</Typography>
            {!errors.expense ?
                <TextField
                    type="number"
                    id="standard-start-adornment"
                    className={classes.textField}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    value={expense}
                    placeholder="Ex. 50"
                    onChange={handleChangeExpense}
                />
                :
                <TextField
                    error
                    helperText="Incorrect entry."
                    type="number"
                    id="standard-start-adornment"
                    className={classes.textField}
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    }}
                    value={expense}
                    placeholder="Ex. 50"
                    onChange={handleChangeExpense}
                />

            }

            <Button className={classes.button} type="submit">Add expense</Button>
        </form>
    );
}



Form.propTypes = {
    setcreatedExpense: PropTypes.func.isRequired,
    setWasCreated: PropTypes.func.isRequired
};

export default Form;
