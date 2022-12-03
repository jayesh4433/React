import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";

function ExportItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.item}</h2>
        <div className="expense-item__price">{props.cost}</div>
      </div>
    </div>
  );
}

export default ExportItem;
