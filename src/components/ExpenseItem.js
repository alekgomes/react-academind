import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate"
import Card from "./Card"

function ExpenseItem(props) {
  const month = props.date.toLocaleString("pt-BR", { month: "long" })
  const day = props.date.toLocaleString("pt-BR", { day: "2-digit" })
  const year = props.date.getFullYear()
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">R$ {props.amount}</div>
      </div>
    </Card>
  )
}

export default ExpenseItem
