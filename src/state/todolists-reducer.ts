import {TodolistType} from "../App";

type ActionType = {
    type: string
    [key: string]: any
}

export const todoListsReducer = (state: TodolistType[], action: ActionType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return state.filter(tl => tl.id !== action.id)
        default:
            throw new Error("I don't understand this type")
    }
}