import React from 'react';
import { useDispatch } from 'react-redux';

import './Button.css';

const Button = (props) => {

    const dispatch = useDispatch()

    const { action, actionType, disabled, text = '', classModule = '', mod = '' } = props



    return (
        <button
            onClick={() => dispatch(action(actionType))}
            className={classModule + ' ' + mod}
            disabled={disabled ? true : false}
        >{text}
        </button>
    )
}

export { Button };