import React from "react"
import "./NewExpense.css"
import ExpenseForm from "./ExpenseForm"

const NewExpense = (props) => {
  const handleSaveExpenseData = (data) => {
    const expenseData = { ...data, id: Math.random().toString() }
    props.onAddExpense(expenseData)
  }
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpenseData} />
    </div>
  )
}

export default NewExpense
