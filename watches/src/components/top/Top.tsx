import './top.css'

import React from 'react'
import {Input} from "../input/Input.tsx";

export const Top = ({children}) => {


    return (
        <form className="form">
            {children}
        </form>
    )
}
