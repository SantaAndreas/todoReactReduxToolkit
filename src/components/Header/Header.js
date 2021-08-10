import React from 'react';
import { useSelector } from 'react-redux';

import { toggleUpdatingTodo } from '../../store/todoSlice';
import { Button } from '../Button/Button';

const Header = () => {

    const itemActive = useSelector(state => state.todos.itemActive);
    const todos = useSelector(state => state.todos.todos)

    return (
        <header className='header'>
            <h2 className='header__title'>Сегодня</h2>
            {
                // if another item has been status active
                itemActive && todos.length > 0
                    ?
                    <Button
                        action={toggleUpdatingTodo}
                        actionType={null}
                        text='Править'
                        classModule='button'
                        mod="button_small"
                    />
                    :
                    null
            }
        </header>
    )
}

export { Header }