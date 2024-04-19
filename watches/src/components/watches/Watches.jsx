import './watches.css'
import React from 'react'
import moment from 'moment';

export const Watches = ({props, onDelete}) => {

  const arrayTag = props.map(item =>
    <div className="container-watch"
         key={item.city}
    >
      <div className="city-name">{item.city}</div>
      <div className="delete"
           onClick={() => onDelete(item.city)}
      >✕</div>
      <div className="time-container">
        {moment.utc().add(item.timeZone, 'hours').format('h:mm:ss a')}
      </div>
    </div>
  )

    return (
        <div className="watches">
          {arrayTag}
        </div>
    )
}
