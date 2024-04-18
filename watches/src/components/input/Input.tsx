import React from 'react'
import './input.css'

export const Input = ({title, name}) => {
    return (
        <div className="name-input-box">
            <label htmlFor={name} className={`label-${name}`}>{title}</label>
            <input type="text" name={name} className={`input-${name}`}/>
        </div>
    )
}
