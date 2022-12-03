import "./AddExpense.css";
import ExpenseForm from "./ExpenseForm.js";

const AddExpense = (props) => {
  const addExpenseDataHandler = (userExpenseData) => {
    const expenseData = {
      ...userExpenseData,
      id: Math.random().toString(),
    };
    // console.log(expenseData);
    props.onAddExpenseDataHandler(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onAddExpenseHandler={addExpenseDataHandler} />
    </div>
  );
};

export default AddExpense;
