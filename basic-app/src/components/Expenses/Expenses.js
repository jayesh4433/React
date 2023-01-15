import { useState } from "react";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import Card from "../Card/Card";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");

  const filterYear = (filteredYear) => {
    setYear(filteredYear);
  };

  const filteredExpense = props.expense.filter(
    (exp) => exp.date.getFullYear().toString() === year
  );
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter onFilterYear={filterYear} defaultYear={year} />
        <ExpensesList item={filteredExpense}></ExpensesList>
      </Card>
    </div>
  );
};

export default Expenses;
