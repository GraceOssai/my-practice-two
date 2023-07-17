import React from 'react'
import './ListItem.css'

const ListItem = (props) => {
  return (
    <div className='list-items'>
      <div className='list-item-title'>{props.title}</div>
      <div className='list-item-quantity'>{props.quantity}</div>
      <div className='list-item-amount'>{props.amount}</div>
    </div>
  )
}

export default ListItem