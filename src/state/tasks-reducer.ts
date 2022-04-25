import {FilterValuesType, TasksStateType} from '../App';
import {v1} from "uuid";

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK'
    todolistId: string
    taskId: string

}
export type addTaskActionType = {
    type: 'ADD-TASK'
    todolistId: string
    title: string
}
export type changeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS'
    todolistId: string
    taskId: string
    isDone: boolean
}
export type changeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE'
    todolistId: string
    taskId: string
    title: string
}

type ActionsType = RemoveTaskActionType
    | addTaskActionType
    | changeTaskStatusActionType
    | changeTaskTitleActionType;

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case "REMOVE-TASK":
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        case "ADD-TASK":
            return {
                ...state,
                [action.todolistId]: [{id: v1(), title: action.title, isDone: false}, ...state[action.todolistId]]
            }
        case "CHANGE-TASK-STATUS":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {
                    ...t,
                    isDone: action.isDone
                } : t)
            }
        case "CHANGE-TASK-TITLE":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId].map(t => t.id === action.taskId ? {
                    ...t,
                    title: action.title
                } : t)
            }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (todolistId: string, taskId: string): RemoveTaskActionType => {
    return {type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId}
}
export const addTaskAC = (todolistId: string, title: string): addTaskActionType => {
    return {type: 'ADD-TASK', todolistId: todolistId, title: title}
}

export const changeTaskStatusAC = (todolistId: string, taskId: string, isDone: boolean): changeTaskStatusActionType => {
    return {type: 'CHANGE-TASK-STATUS', todolistId: todolistId, taskId: taskId, isDone: isDone}
}

export const changeTaskTitleAC = (todolistId: string, taskId: string, title: string): changeTaskTitleActionType => {
    return {type: 'CHANGE-TASK-TITLE', todolistId: todolistId, taskId: taskId, title: title}
}