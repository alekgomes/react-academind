import React, { useState } from "react"
import "./ExpenseForm.css"

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("")
  const [enteredAmount, setEnteredAmount] = useState(0)
  const [enteredDate, setEnteredDate] = useState(new Date())

  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // })

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
    // setUserInput({ ...userInput, enteredTitle: e.target.value })
  }

  const amountChangeHandler = (e) => setEnteredAmount(e.target.value)
  // setUserInput({ ...userInput, enteredAmount: e.target.value })

  const dateChangeHandler = (e) => setEnteredDate(e.target.value)
  // setUserInput({ ...userInput, enteredDate: e.target.value })
  // setUserInput((prevState) => ({ ...prevState, enteredDate: e.target.value })) // usando função, temos acesso ao PREVIOUS STATE

  const submitHandler = (e) => {
    e.preventDefault()
    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    }

    console.log("expenseData: ", expenseData)
    props.onSaveExpenseData(expenseData)
  }

  return (
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
        <button type="submit">Add expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
