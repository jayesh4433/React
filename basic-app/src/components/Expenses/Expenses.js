import ExportItem from "./ExpenseItem";

import "./Expenses.css";

function expenses(props) {
  const data = props.expense;
  const year = props.selectedYear;
  return (
    <div>
      {props.expense
        .filter((exp) => exp.date.getFullYear() == year)
        .map((exp) => {
          return (
            <ExportItem
              key={exp.id}
              item={exp.title}
              cost={exp.amount}
              date={exp.date}
            />
          );
        })}
    </div>
  );
}

export default expenses;
