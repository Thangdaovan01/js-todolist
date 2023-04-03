const TODOS_STORAGE_KEY = 'TODOS'

export default {
    get() {
        // return []
        return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || []
        // return JSON.parse(localStorage.getItem(TODOS_STORAGE_KEY)) || []
    },
    set(todos) {
        localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
    }
}