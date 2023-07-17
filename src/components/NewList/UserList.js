import React, {useState} from 'react'
import './UserList.css'

const UserList = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('')
  const [enteredQuantity, setEnteredQuantity] = useState('')
  const [enteredAmount, setEnteredAmount] = useState('')

  const enteredTitleHandler = (event) => {
    setEnteredTitle(event.target.value)
  }

  const enteredQuantityHandler = (event) => {
    setEnteredQuantity(event.target.value)
  }

  const enteredAmountHandler = (event) => {
    setEnteredAmount(event.target.value)
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    const userData = {
      title : enteredTitle,
      quantity : enteredQuantity,
      amount : enteredAmount
    }

    props.onSaveUserData(userData)

    setEnteredTitle('')
    setEnteredQuantity('')
    setEnteredAmount('')
  }
  return (
    <form onSubmit={submitFormHandler}>
      <div className='user-list'>
          <div className='user-list__control'>
            <label>Title</label>
            <input type="text"
            onChange={enteredTitleHandler}
            value={enteredTitle} 
            />
          </div>
          <div className='user-list__control'>
            <label>Quantity</label>
            <input type="number" min='0.01' step='0.01'
            onChange={enteredQuantityHandler}
            value={enteredQuantity} 
            />
          </div>
        
        <div className='user-list__control'>
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01'
          onChange={enteredAmountHandler}
          value={enteredAmount} 
           />
        </div>
        <div className='user-list__btn'>
          <button>Add List</button>
        </div>
      </div>
    </form>
  )
}

export default UserList