import React, { Fragment } from 'react';
import { Typography, TableContainer, Table, TableRow, TableCell, TableHead, TableBody, Paper } from '@material-ui/core';
import PropTypes from 'prop-types';
import useStyle from './style';
const ListOfExpenses = ({ expenses }) => {
    const classes = useStyle();
    return (
        <Fragment>
            {expenses.length > 0 ?
                <Fragment>
                    <Typography variant="h3">List of Expenses</Typography>
                    <TableContainer>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left"><Typography variant="h6">Reason</Typography></TableCell>
                                    <TableCell align="right"><Typography variant="h6">Spending</Typography></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    expenses.map((expense) => {
                                        return (
                                            <TableRow key={expense.id}>
                                                <TableCell align="left"><Typography variant="subtitle1">{expense.reason}</Typography></TableCell>
                                                <TableCell align="right">
                                                    <Paper className={classes.paperI} align="right">
                                                        <Typography className={classes.typo}>

                                                            $ {expense.spending}

                                                        </Typography>
                                                    </Paper>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })

                                }
                            </TableBody>
                        </Table>
                    </TableContainer>


                </Fragment>

                :
                <Typography variant="h5">There are no expenses added yet</Typography>

            }
        </Fragment>
    );
}



ListOfExpenses.propTypes = {
    expenses: PropTypes.array.isRequired
};



export default ListOfExpenses;
