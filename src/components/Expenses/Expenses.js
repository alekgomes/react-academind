import "./Expenses.css"
import ExpenseItem from "./ExpenseItem"
import ExpensesFilter from "./ExpensesFilter"
import { useState } from "react"

function Expenses(props) {
  const [enteredDate, setEnteredDate] = useState(new Date())

  const expenses = props.expenses

  const dateChangeHandler = (e) => setEnteredDate(new Date(e.target.value))
  return (
    <div>
      <ExpensesFilter onDateChange={dateChangeHandler} />
      <div className="expenses">
        <ExpenseItem
          title={expenses[0].title}
          date={enteredDate}
          amount={expenses[0].amount}
        />

        <ExpenseItem
          title={expenses[1].title}
          date={expenses[1].date}
          amount={expenses[1].amount}
        />

        <ExpenseItem
          title={expenses[2].title}
          date={expenses[2].date}
          amount={expenses[2].amount}
        />
      </div>
    </div>
  )
}

export default Expenses
