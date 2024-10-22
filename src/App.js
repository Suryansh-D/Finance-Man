// src/App.js
import React, { useState } from 'react';
import './styles/App.css';
import AddExpense from './components/AddExpense';
import ExpenseList from './components/ExpenseList';
// src/App.js
import './styles/App.css'; // This should point to the correct path

function App() {
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  return (
    <div className="App">
      <h1>College Finance Tracker</h1>
      <AddExpense addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
    </div>
  );
}

export default App;
