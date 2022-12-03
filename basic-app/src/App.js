import Expense from "./components/Expenses/Expenses";
import Card from "./components/Card/Card";
import AddExpense from "./components/AddExpense/AddExpense";

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

  const addExpenseDataHandler = (expenseData) => {
    console.log(expenseData);
  };

  return (
    <div>
      <AddExpense onAddExpenseDataHandler={addExpenseDataHandler} />
      <Card>
        <Expense expense={expenses[0]}></Expense>
        <Expense expense={expenses[1]}></Expense>
        <Expense expense={expenses[2]}></Expense>
        <Expense expense={expenses[3]}></Expense>
      </Card>
    </div>
  );
}

export default App;
