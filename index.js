const { createStore, applyMiddleware } = require("redux")
const { delayMiddleware, fetchTodosMiddleware } = require("./middlewares")

// iniital state 
const initialState = {
    todos: []
}

// reducer 
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/todoAdded':
            return [...state.todos, {
                title: action.payload
            }]

        case 'todos/todosLoaded':
            return [...state.todos, ...action.payload]

        default:
            return state
    }
}

// create store 
const store = createStore(todoReducer, applyMiddleware(delayMiddleware, fetchTodosMiddleware))

// subscribe to store changes 
store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'todos/todoAdded',
//     payload: 'Learn redux'
// })
store.dispatch({
    type: 'todos/fetchTodos',
    payload: 'Learn redux'
})