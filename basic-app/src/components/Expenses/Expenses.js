import ExportItem from "./ExpenseItem";

import "./Expenses.css";

function expenses(props) {
  const data = props.expense;
  const year = props.selectedYear;
  console.log(year);
  return (
    <div>
      <ExportItem item={data[0].title} cost={data[0].amount} date={data[0].date} />
      <ExportItem item={data[1].title} cost={data[1].amount} date={data[1].date} />
      <ExportItem item={data[2].title} cost={data[2].amount} date={data[2].date} />
      <ExportItem item={data[3].title} cost={data[3].amount} date={data[3].date} />
    </div>
  );
}

export default expenses;
