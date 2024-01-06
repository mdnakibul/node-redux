const fetch = require('node-fetch')

const fetchTodos = async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const todos = await response.json()
    dispatch({
        type: 'todos/todosLoaded',
        payload: todos
    })
}

const fetchPosts = async (dispatch, getState) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
    const posts = await response.json()
    dispatch({
        type: 'todos/postsLoaded',
        payload: posts
    })
}

module.exports = {
    fetchTodos,
    fetchPosts
}