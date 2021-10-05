import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = () => {
  // const [enteredTitle, setEnteredTitle] = useState("")
  // const [enteredAmount, setEnteredAmount] = useState(0)
  // const [enteredDate, setEnteredDate] = useState(new Date())

  const [userInput, setUserInput] = useState({
    enteredTitle: "",
    enteredAmount: "",
    enteredDate: "",
  })

  const titleChangeHandler = (e) => {
    setUserInput({ ...userInput, enteredTitle: e.target.value })
  }

  const amountChangeHandler = (e) =>
    setUserInput({ ...userInput, enteredAmount: e.target.value })

  const dateChangeHandler = (e) =>
    setUserInput({ ...userInput, enteredDate: e.target.value })

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
