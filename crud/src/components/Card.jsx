import React from 'react'
import './card.css'

export const Card = ({props, onDElete,}) => {

  const newElement = props.map((user) =>
    <div className="item-container"
         key={user.id}
    >
      <div className="title">{user.content}</div>
      <div className="delete"
           onClick={() => {onDElete(user.id)}}
      >✕</div>
    </div>
  )




  return (
    newElement
  )
}
