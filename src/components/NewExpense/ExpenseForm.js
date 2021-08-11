import React, { useState } from 'react';
import Button from '../UI/Button';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [isValid, setIsValid] = useState(true);

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: '',
  //   enteredAmount: '',
  //   enteredDate: '',
  // });

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: event.target.value,
    // });
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    if(event.target.value.trim().length > 0){
      setIsValid(true);
    }
    // setUserInput({
    //   ...userInput,
    //   enteredDate: event.target.value,
    // });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (enteredTitle.trim().length === 0){
      setIsValid(false);
      return;
    }else if(enteredAmount.trim().length === 0){
      setIsValid(false);
      return;
    }else if(enteredDate.trim().length === 0){
      setIsValid(false);
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className={`new-expense__control ${!isValid? 'invalid': ''}`}>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}

          />
        </div>
        <div className={`new-expense__control ${!isValid? 'invalid': ''}`}>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            step='0.01'
            value={enteredAmount}
            onChange={amountChangeHandler}

          />
        </div>
        <div className={`new-expense__control ${!isValid? 'invalid': ''}`}>
          <label>Date</label>
          <input
            type='date'
            min='2019-01-01'
            max='2022-12-31'
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className='new-expense__actions'>
        <Button type='button' onClick={props.onCancel}>Cancel</Button>
        <Button type='submit'>Add Expense</Button>
      </div>
      
    </form>
  );
};

export default ExpenseForm;
