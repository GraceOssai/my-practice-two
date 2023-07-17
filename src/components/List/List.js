import React from 'react'
import ListItem from './ListItem'
import './List.css'

const List = (props) => {
  return (
    <div className='list'>
      
      {props.item.map(eachItem => <ListItem 
      title={eachItem.title}
      quantity={eachItem.quantity}
      amount={eachItem.amount} 
      />)}
      
    </div>
  )
}

export default List