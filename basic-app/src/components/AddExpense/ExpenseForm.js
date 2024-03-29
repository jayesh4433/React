import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceChangeHandler = (event) => {
    setPrice(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      title: title,
      amount: +price,
      date: new Date(date),
    };
    props.onAddExpenseHandler(expenseData);
    setTitle("");
    setPrice("");
    setDate("");
    props.setShowAddExpense(false);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control input">
          <label className="new-expense__control label">Title</label>
          <input type="text" value={title} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control input">
          <label className="new-expense__control label">Price</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={price}
            onChange={priceChangeHandler}
          />
        </div>
        <div className="new-expense__control input">
          <label className="new-expense__control label">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
          onClick={() => {
            props.setShowAddExpense(false);
          }}
        >
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
