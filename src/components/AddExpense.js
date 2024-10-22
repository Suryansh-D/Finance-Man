// src/components/AddExpense.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { v4 as uuidv4 } from 'uuid';

const AddExpense = ({ addExpense }) => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newExpense = { id: uuidv4(), description, amount: parseFloat(amount) };
    addExpense(newExpense);
    setDescription('');
    setAmount('');
  };

  return (
    <motion.form 
      className="add-expense" 
      onSubmit={handleSubmit} 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </motion.form>
  );
};

export default AddExpense;
