import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"

function Expenses(props) {
  const [filterDate, setFilterDate] = useState(new Date())

  let expenses = props.expenses

  const dateChangeHandler = (e) => setFilterDate(new Date(e.target.value))

  const filteredExpenses = expenses.filter(
    (e) => e.date.getFullYear() == filterDate.getFullYear() + 1
  )

  return (
    <div className="expenses">
      <ExpensesFilter onDateChange={dateChangeHandler} />
      {filteredExpenses.map((e) => (
        <ExpenseItem title={e.title} date={e.date} amount={e.amount} />
      ))}
    </div>
  )
}

export default Expenses
