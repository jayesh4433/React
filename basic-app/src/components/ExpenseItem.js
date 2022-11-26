import "./ExpenseItem.css";

function ExportItem() {
    const expenseDate = new Date(2022,11,23);
    const expenseTitle = 'Bike Insurance';
    const expenseAmount = 4130;
  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseTitle}</h2>
        <div className="expense-item__price">{expenseAmount}</div>
      </div>
    </div>
  );
}

export default ExportItem;
