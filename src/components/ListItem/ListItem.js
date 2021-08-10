import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { selectItem } from '../../store/todoSlice';
import { updatingCurrentTextAndId, toggleDeletingTodo } from '../../store/todoSlice';

import './ListItem.css'

const ListItem = (props) => {

    const { id, text } = props

    const dispatch = useDispatch()

    let [count, setCount] = useState(0)
    let [classActiveCheckbox, setClassActiveCheckbox] = useState('')

    const removeItem = () => {
        setCount(count++)
        if (count > 2) {
            setClassActiveCheckbox('item__radio-fake_checked')
        }
        if (count >= 4) {
            dispatch(toggleDeletingTodo())
            setCount(0)
            setClassActiveCheckbox('')
        }
    }

    const changeLabel = () => {
        dispatch(updatingCurrentTextAndId({ text, id }))
    }

    return (
        <li className='item' onClick={removeItem}>
            <label className='item__label' onClick={() => changeLabel()} >
                <input type="radio" name='item' className='item__radio' onClick={() => dispatch(selectItem())} />
                <span className={['item__radio-fake', classActiveCheckbox].join(' ')}></span>
                <span className='item__text'>{text}</span>
            </label>
        </li>
    )
}

export { ListItem };