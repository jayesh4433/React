import { useState } from "react";
import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const AddExpense = (props) => {
  const [showAddExpense, setShowAddExpense] = useState(false);

  const addExpenseDataHandler = (userExpenseData) => {
    const expenseData = {
      ...userExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpenseDataHandler(expenseData);
  };

  const handleClick = () => {
    setShowAddExpense(true);
  };

  return (
    <div className="new-expense">
      {showAddExpense ? (
        <ExpenseForm
          onAddExpenseHandler={addExpenseDataHandler}
          setShowAddExpense={setShowAddExpense}
        />
      ) : (
        <button onClick={handleClick} type="submit">
          Add Expense
        </button>
      )}
    </div>
  );
};

export default AddExpense;
