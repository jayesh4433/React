import Expense from "./components/Expenses/Expenses";
import Card from "./components/Card/Card";
import AddExpense from "./components/AddExpense/AddExpense";
import ExpensesFilter from "./components/ExpenseFilter/ExpensesFilter";
import { useState } from "react";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];
  const [year, setYear] = useState("");

  const addExpenseDataHandler = (expenseData) => {
    console.log(expenseData);
  };
  const filterYear = (filteredYear) => {
    setYear(filteredYear);
  };

  return (
    <div>
      <AddExpense onAddExpenseDataHandler={addExpenseDataHandler} />
      <ExpensesFilter onFilterYear={filterYear} />
      <Card>
        <Expense expense={expenses} selectedYear={year}></Expense>
      </Card>
    </div>
  );
}

export default App;
