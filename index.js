const { createStore, applyMiddleware } = require("redux")
const { fetchTodos, fetchPosts } = require("./utils")
const { thunk } = require("redux-thunk")

// iniital state 
const initialState = {
    todos: [], posts: []
}

// reducer 
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'todos/todoAdded':
            return [...state.todos, {
                title: action.payload
            }]

        case 'todos/todosLoaded':
            const newTodos = [...state.todos, ...action.payload]
            return {
                todos: newTodos,
                posts: [...state.posts]
            }

        case 'todos/postsLoaded':
            const newPosts = [...state.posts, ...action.payload]
            return {
                todos: [...state.todos],
                posts: newPosts
            }

        default:
            return state
    }
}

// create store 
const store = createStore(todoReducer, applyMiddleware(thunk))

// subscribe to store changes 
store.subscribe(() => {
    console.log(store.getState())
})

// store.dispatch({
//     type: 'todos/todoAdded',
//     payload: 'Learn redux'
// })
store.dispatch(fetchTodos)
store.dispatch(fetchPosts)