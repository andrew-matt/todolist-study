import axios from 'axios';

const settings = {
    withCredentials: true,
    headers: {
        'API-KEY': '8d69feac-9319-4391-a8a4-a23d67360845'
    }
}

export const todolistsAPI = {
    getTodolists() {
        return axios.get('https://social-network.samuraijs.com/api/1.1/todo-lists', settings)

    },
    createTodolist(title: string) {
        return  axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists", {title}, settings)

    },
    deleteTodolist(id: string) {
        return axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, settings)
    },
    updateTodolist(id: string, title: string) {
        return axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${id}`, {title}, settings)
    }
}