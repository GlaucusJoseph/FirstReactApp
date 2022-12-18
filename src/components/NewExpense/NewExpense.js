import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isAdding, setIsAdding] = useState(false);
  const saveExpenseDataHandler = (enteredExpanseDate) => {
    const expenseData = {
      ...enteredExpanseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addExpenseHandler = () => {
    setIsAdding(true);
  };
  const cancelExpenseHandler = () => {
    setIsAdding(false);
  };

  return (
    <div className="new-expense">
      {isAdding ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          cancelExpenseHandler={cancelExpenseHandler}
        />
      ) : (
        <button type="button" onClick={addExpenseHandler}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
