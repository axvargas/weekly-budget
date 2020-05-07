import React, { Fragment } from 'react';
import Question from '../components/question'
import Form from '../components/form'
import ListOfExpenses from '../components/listOfExpenses'
import ExpenseManager from '../components/expenseManager'
import {
    createMuiTheme,
    responsiveFontSizes,
    MuiThemeProvider,
    Typography,
    Grid,
    Paper,
} from '@material-ui/core';

import useStyles from './style'


const App = ({ setBudget, setDifference, logged, setLogged, expenses, budget, difference, setcreatedExpense, setWasCreated}) => {
    const classes = useStyles();
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);

    return (
        <Fragment>
            <MuiThemeProvider theme={theme}>
                <Grid container spacing={3} className={classes.grid}>

                    <Grid item xs={12} className={classes.grid}>
                        <Typography variant="h1" gutterBottom>Weekly budget</Typography>
                    </Grid>

                    <Grid item xs={12} className={classes.grid} >
                        <Grid container justify="center">
                            <Paper className={classes.paper}>
                                {!logged ?
                                    <Question setBudget={setBudget} setDifference={setDifference} setLogged={setLogged} />

                                    :

                                    <Grid spacing={2} container justify="center">
                                        <Grid item md={6} sm={12} lg={6} className={classes.grid} >
                                            <Form  setcreatedExpense={setcreatedExpense} setWasCreated={setWasCreated} />
                                        </Grid>
                                        <Grid item md={6} sm={12} lg={6} className={classes.grid} >
                                            <ListOfExpenses expenses={expenses} />
                                            
                                            <ExpenseManager
                                                budget={budget}
                                                difference={difference}
                                            />
                                        </Grid>
                                        <Grid item md={6} sm={12} lg={6} className={classes.grid} >
                                            
                                        </Grid>
                                    </Grid>


                                }

                            </Paper>
                        </Grid>
                    </Grid>



                </Grid>




            </MuiThemeProvider>
        </Fragment >

    );
}

export default App;