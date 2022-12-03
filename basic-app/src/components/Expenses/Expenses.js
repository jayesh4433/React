import Card from "../Card/Card";
import ExportItem from "./ExpenseItem";

import "./Expenses.css";

function expenses(props) {
    const data = props.expense;
  return (
    <Card className="expenses">
      <ExportItem item={data.title} cost={data.amount} date={data.date} />
    </Card>
  );
}

export default expenses;
