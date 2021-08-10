import React from 'react';
import { useSelector } from 'react-redux';

import {
  toggleAddingTodo,
  addItem,
  toggleUpdatingTodo,
  updateItem,
  addingCurrentText,
  updateCurrentText,
  toggleDeletingTodo,
  deleteItem

} from '../store/todoSlice';
import './App.css';
import { Header } from './Header';
import { Button } from './Button/Button';
import { List } from './list/List';
import { Modal } from './Modal';

const App = () => {

  const isOpenAdd = useSelector(state => state.todos.isOpenAdd);
  const addingText = useSelector(state => state.todos.addingText);
  const isOpenUpdate = useSelector(state => state.todos.isOpenUpdate);
  const currentUpdateInput = useSelector(state => state.todos.currentUpdateInput);
  const isOpenDelete = useSelector(state => state.todos.isOpenDelete);

  return (
    <div className="App">
      <Header />
      <List />
      <Button
        action={toggleAddingTodo}
        actionType={null}
        text={null}
        classModule='button'
        mod="button_add"
        disabled={false}
      />
      {
        // open modal add todo
        isOpenAdd
          ?
          <Modal
            childrenComponent={null}
            input={['Введите текст задачи', 'input', 'input_add']}
            inputCurrentState={addingText}
            inputCurrentStateChange={addingCurrentText}

            buttonFirst={['Закрыть', 'button', 'button']}
            buttonFirstDisabled={false}
            buttonFirstAction={toggleAddingTodo}
            buttonFirstActionType={null}

            buttonSecond={['Добавить', 'button', 'button_regular']}
            buttonSecondAction={addItem}
            buttonSecondActionType={addingText}
            buttonSecondDisabled={!addingText}
          />
          :
          null
      }

      {/* if isOpenUpdate == true and isOpenAdd been closed */
        isOpenUpdate && !isOpenAdd
          ?
          <Modal
            childrenComponent={null}
            input={['Введите текст задачи', 'input', '']}
            inputCurrentState={currentUpdateInput}
            inputCurrentStateChange={updateCurrentText}

            buttonFirst={['Закрыть', 'button', 'button']}
            buttonFirstAction={toggleUpdatingTodo}
            buttonFirstActionType={null}
            buttonFirstDisabled={false}

            buttonSecond={['Сохранить', 'button', 'button_regular']}
            buttonSecondAction={updateItem}
            buttonSecondActionType={addingText}
            buttonSecondDisabled={false}
          />
          :
          null
      }
      {/* if isOpen === true */
        isOpenDelete
          ?
          <Modal
            childrenComponent={<h2>Вы действительно хотите удалить '{currentUpdateInput}'</h2>}
            input={['', '', 'input_none']}
            inputCurrentState={currentUpdateInput}
            inputCurrentStateChange={updateCurrentText}

            buttonFirst={['Отмена', 'button', 'button_regular']}
            buttonFirstAction={toggleDeletingTodo}
            buttonFirstActionType={null}
            buttonFirstDisabled={false}

            buttonSecond={['Удалить', 'button', 'button']}
            buttonSecondAction={deleteItem}
            buttonSecondActionType={addingText}
            buttonSecondDisabled={false}
          />
          :
          null
      }
    </div>
  );
}

export default App;