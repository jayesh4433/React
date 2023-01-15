import Expense from "./components/Expenses/Expenses";
import Card from "./components/Card/Card";
import AddExpense from "./components/AddExpense/AddExpense";
import ExpensesFilter from "./components/ExpenseFilter/ExpensesFilter";
import { useState } from "react";
const initailExpenses = [
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
function App() {
  const [year, setYear] = useState("2020");
  const [expenses, setExpenses] = useState(initailExpenses);
  const addExpenseDataHandler = (expenseData) => {
    setExpenses((prevExpense) => {
      return [expenseData, ...prevExpense];
    });
  };
  const filterYear = (filteredYear) => {
    setYear(filteredYear);
  };

  return (
    <div>
      <AddExpense onAddExpenseDataHandler={addExpenseDataHandler} />
      <Card>
        <ExpensesFilter onFilterYear={filterYear} defaultYear={year} />
        <Expense expense={expenses} selectedYear={year}></Expense>
      </Card>
    </div>
  );
}

export default App;
