import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
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
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </div>
  )
}

export default Expenses
