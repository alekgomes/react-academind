import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState(0)
  const [enteredDate, setEnteredDate] = useState(new Date())
  const [isAdding, setIsAdding] = useState(false)

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandler = (e) => setEnteredAmount(e.target.value)

  const dateChangeHandler = (e) => setEnteredDate(e.target.value)

  // setUserInput((prevState) => ({ ...prevState, enteredDate: e.target.value })) // usando função, temos acesso ao PREVIOUS STATE

  const submitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }
    props.onSaveExpenseData(expenseData)
  }

  return (
    <div>
      {isAdding ? (
        <form onSubmit={submitHandler}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="">Title</label>
              <input
                type="text"
                value={enteredTitle}
                onChange={titleChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="">Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                value={enteredAmount}
                onChange={amountChangeHandler}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="">Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2022-12-31"
                value={enteredDate}
                onChange={dateChangeHandler}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button onClick={() => setIsAdding(false)}>Cancel</button>
            <button type="submit">Add expense</button>
          </div>
        </form>
      ) : (
        <button onClick={() => setIsAdding(true)}>Add New Expense</button>
      )}
    </div>
  )
}

export default ExpenseForm
