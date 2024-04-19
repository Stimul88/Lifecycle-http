import React from 'react'
import './input.css'

export const Input = ({title, name, value, onInputElement}) => {
    return (
        <div className="name-input-box">
            <label htmlFor={name} className={`label-${name}`}>{title}</label>
            <input type="text"
                   name={name}
                   value={value}
                   className={`input-${name}`}
                   onChange={onInputElement}
            />
        </div>
    )
}
