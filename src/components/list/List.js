import React from 'react';
import { useSelector } from 'react-redux';

import { ListItem } from '../ListItem/ListItem';
import './List.css';


const List = () => {

    const todos = useSelector(state => state.todos.todos)


    return (

        <ul className='list'>
            {
                todos.length
                    ?
                    todos.map(list => (
                        <ListItem key={list.id} id={list.id} text={list.text} />
                    ))
                    :
                    <p className='list__text'>Список задач пуст</p>
            }
        </ul>

    )
}

export { List };