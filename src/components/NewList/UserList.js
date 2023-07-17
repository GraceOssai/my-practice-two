import React from 'react'
import './UserList.css'

const UserList = () => {
  return (
    <form>
      <div className='user-list'>
          <div className='user-list__control'>
            <label>title</label>
            <input type="text" />
          </div>
          <div className='user-list__control'>
            <label>Quantity</label>
            <input type="number" min='0.01' step='0.01' />
          </div>
        
        <div className='user-list__control'>
          <label>Amount</label>
          <input type="number" min='0.01' step='0.01' />
        </div>
        <div className='user-list__btn'>
          <button>Add List</button>
        </div>
      </div>
    </form>
  )
}

export default UserList