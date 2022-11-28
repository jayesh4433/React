import ExportItem from "./ExpenseItem";

import "./expenses.css";

function expenses(props) {
    const data = props.expense;
  return (
    <div className="expenses">
      <ExportItem item={data.title} cost={data.amount} date={data.date} />
    </div>
  );
}

export default expenses;
