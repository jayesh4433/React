import ExportItem from "./ExpenseItem";

import "./Expenses.css";

function expenses(props) {
    const data = props.expense;
  return (
   
      <ExportItem item={data.title} cost={data.amount} date={data.date} />
  );
}

export default expenses;
