import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [
            {
                id: 1,
                text: 'Test 1'
            },
            {
                id: 2,
                text: 'Test 2'
            }
        ],

        itemActive: false,

        isOpenAdd: false,
        isOpenUpdate: false,
        isOpenDelete: false,

        prevUpdateInput: '',

        currentUpdateInput: '',
        updatingId: '',
        addingText: ''


    },
    reducers: {
        addingCurrentText(state, action) {
            state.addingText = action.payload.event
        },

        updateCurrentText(state, action) {
            state.currentUpdateInput = action.payload.event
        },

        updatingCurrentTextAndId(state, action) {
            state.prevUpdateInput = action.payload.text
            state.updatingId = action.payload.id
        },

        addItem(state, action) {
            state.todos.push({
                id: new Date().toISOString(),
                text: action.payload,
            })
            state.isOpenAdd = false
            state.addingText = ''
        },

        updateItem(state) {
            state.todos = state.todos.map(todo => {
                if (todo.id === state.updatingId) {
                    todo.text = state.currentUpdateInput
                }
                return todo
            })
            state.isOpenUpdate = false
        },

        deleteItem(state) {
            state.todos = state.todos.filter(todo => todo.id !== state.updatingId)
            state.isOpenDelete = false
            state.itemActive = false
        },

        selectItem(state) {
            state.itemActive = true
            state.currentUpdateInput = state.prevUpdateInput
        },

        toggleAddingTodo(state) {
            state.isOpenAdd = !state.isOpenAdd
        },

        toggleUpdatingTodo(state) {
            state.isOpenUpdate = !state.isOpenUpdate
        },

        toggleDeletingTodo(state) {
            state.isOpenDelete = !state.isOpenDelete
        }
    }
})

export const {
    toggleAddingTodo,
    addItem,
    addingCurrentText,
    toggleUpdatingTodo,
    updatingCurrentTextAndId,
    updateItem,
    selectItem,
    updateCurrentText,
    deleteItem,
    toggleDeletingTodo
} = todoSlice.actions;

export default todoSlice.reducer;