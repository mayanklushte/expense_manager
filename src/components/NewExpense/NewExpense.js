import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import Button from '../UI/Button';
const NewExpense = (props) => {

  const [isEditing, setIsEditing] = useState(false);

  const startEditingHandler = () => {
    setIsEditing(true)
  }

  const stopEditingHandler = () => {
    setIsEditing(false)
  }

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };


  return (
    <div className='new-expense'>

      {!isEditing && (
        <Button  onClick={startEditingHandler}>Add New Expense</Button>
      )}
      {isEditing && (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />

      )}
      
    </div>
  );
};

export default NewExpense;
