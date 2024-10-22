// src/components/ExpenseList.js
import React from 'react';
import ExpenseItem from './ExpenseItem';
import { motion } from 'framer-motion';

const ExpenseList = ({ expenses }) => {
  return (
    <motion.div 
      className="expense-list" 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <h2>Your Expenses</h2>
      {expenses.length === 0 ? (
        <p>No expenses added yet.</p>
      ) : (
        expenses.map(expense => (
          <ExpenseItem key={expense.id} expense={expense} />
        ))
      )}
    </motion.div>
  );
};

export default ExpenseList;
