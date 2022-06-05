import React, { useState } from "react";

import "./App.css";
import NewExpense from "./components/NewExpense/NewExpense";
import Expenses from "./components/Expenses/Expenses";

//initial values for expenses
const initial_expenses = [
  {
    id: "e1",
    title: "New Car",
    amount: 300,
    date: new Date(2021, 5, 16),
  },
  {
    id: "e2",
    title: "Gucci Boots",
    amount: 200,
    date: new Date(2021, 4, 13),
  },
  {
    id: "e3",
    title: "New House",
    amount: 100,
    date: new Date(2022, 8, 14),
  },
  {
    id: "e4",
    title: "Study Table",
    amount: 150,
    date: new Date(2019, 10, 15),
  },

  {
    id: "e5",
    title: "Laptop",
    amount: 1500,
    date: new Date(2019, 3, 15),
  },

  {
    id: "e6",
    title: "Water Bottle",
    amount: 150,
    date: new Date(2022, 2, 15),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(initial_expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...expenses];
    });
  };
  return (
    <div>
      <h1>Expenses Tracker</h1>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
