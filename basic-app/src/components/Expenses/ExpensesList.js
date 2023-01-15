import ExportItem from "./ExpenseItem";
import './ExpensesList.css';

const ExpensesList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback">No expense found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.item.map((exp) => (
        <ExportItem
          key={exp.id}
          item={exp.title}
          cost={exp.amount}
          date={exp.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
