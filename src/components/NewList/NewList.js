import React from 'react'
import './NewList.css'
import UserList from './UserList'

const NewList = (props) => {
  const saveUserDataHandler = (enteredUserData) => {
    const userData = {
      ...enteredUserData,
      id : Math.random().toString()
    }
    props.onAddUserData(userData)
  }

  return (
    <div className='new-list'>
      <UserList onSaveUserData={saveUserDataHandler}/>
    </div>
  )
}

export default NewList