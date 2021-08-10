import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';

// import { addingCurrentText } from '../../store/todoSlice';
import './Input.css';


const Input = (props) => {

    const { placeholder, classModule, mod, inputCurrentState, inputCurrentStateChange } = props

    const [text, setText] = useState(inputCurrentState)

    const dispatch = useDispatch()

    const changeInput = (event) => {
        setText(event)
        dispatch(inputCurrentStateChange({ event }))
    }


    return (
        <input
            placeholder={placeholder}
            className={classModule + ' ' + mod}
            value={text}
            onChange={(e) => changeInput(e.target.value)} />
    )
}

export { Input };