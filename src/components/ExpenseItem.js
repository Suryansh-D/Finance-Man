// src/components/ExpenseItem.js
import React from 'react';
import { motion } from 'framer-motion';

const ExpenseItem = ({ expense }) => {
  return (
    <motion.div 
      className="expense-item" 
      initial={{ scale: 0 }} 
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
    >
      <p>{expense.description}: ${expense.amount.toFixed(2)}</p>
    </motion.div>
  );
};

export default ExpenseItem;
