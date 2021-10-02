import "./ExpenseItem.css"

function ExpenseItem() {
  return (
    <div className="expense-item">
      <div>28 março de 2018 </div>
      <div className="expense-item__description">
        <h2>Seguro do carro</h2>
        <div className="expense-item__price">R$ 250.00</div>
      </div>
    </div>
  )
}

export default ExpenseItem
