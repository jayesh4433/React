import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate.js";
import Card from "../Card/Card"

function ExportItem(props) {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__description">
          <h2>{props.item}</h2>
          <div className="expense-item__price">{props.cost}</div>
        </div>
      </Card>
    </li>
  );
}

export default ExportItem;
