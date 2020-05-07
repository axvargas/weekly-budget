import React, { useState, useEffect } from 'react';
import AppPage from './AppPage';
import { SnackbarProvider } from 'notistack';
const App = () => {
	const [budget, setBudget] = useState(0);
	const [difference, setDifference] = useState(0);
	const [logged, setLogged] = useState(false);
	const [expenses, setExpenses] = useState([]);
	const [createdExpense, setcreatedExpense] = useState({});
	const [wasCreated, setWasCreated] = useState(false);

	useEffect(() => {
		console.log(createdExpense);
		//Add the new expense
		if (wasCreated) {
			setExpenses([
				...expenses,
				createdExpense
			]);

			//decrease the remain
			const remaining = difference - createdExpense.spending;
			setDifference(remaining);

			//reset was created to false

			setWasCreated(false);


		}


	}, [createdExpense, expenses, difference, wasCreated]);

	return (

		<SnackbarProvider maxSnack={3}>
			<AppPage
				setBudget={setBudget}
				setDifference={setDifference}
				logged={logged}
				setLogged={setLogged}

				expenses={expenses}
				budget={budget}
				difference={difference}
				setcreatedExpense={setcreatedExpense}
				setWasCreated={setWasCreated}
			/>
		</SnackbarProvider>
	);
}

export default App;
