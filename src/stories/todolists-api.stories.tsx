import React, {ChangeEvent, useEffect, useState} from 'react'
import {todolistsAPI} from '../api/todolists-api';

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsAPI.getTodolists()
            .then((res) => {
                setState(res.data)
            })

    }, [])

    return <div> {JSON.stringify(state)}</div>
}

export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [title, setTitle] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const createTodolist = () => {
        todolistsAPI.createTodolist(title)
            .then((res) => {
                setState(res.data)
            }).then(() => {
            setTitle('')
        })
    }

    return (
        <div>
            <div>
                <input
                    value={title}
                    placeholder={'todolist title'}
                    onChange={onChangeHandler}
                />
                <button onClick={createTodolist}>create todolist</button>
            </div>
            {JSON.stringify(state)}
        </div>
    )
}

export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTodolistId(e.currentTarget.value)
    }

    const deleteTodolist = () => {
        todolistsAPI.deleteTodolist(todolistId)
            .then((res) => {
                setState(res.data)
            }).then(() => {
            setTodolistId('')
        })
    }

    return (
        <div>
            <div>
                <input
                    value={todolistId}
                    placeholder={'todolist id'}
                    onChange={onChangeHandler}
                />
                <button onClick={deleteTodolist}>delete todolist</button>
            </div>
            {JSON.stringify(state)}
        </div>
    )
}

export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState('')
    const [todolistTitle, setTodolistTitle] = useState('')

    const onTodolistIdChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTodolistId(e.currentTarget.value)
    }

    const onTodolistTitleChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTodolistTitle(e.currentTarget.value)
    }

    const updateTodolistTitle = () => {
        todolistsAPI.updateTodolist(todolistId, todolistTitle)
            .then((res) => {
                setState(res.data)
            }).then(() => {
            setTodolistId('')
            setTodolistTitle('')
        })
    }

    return (
        <div>
            <div>
                <div>
                    <input
                        value={todolistId}
                        placeholder={'todolist id'}
                        onChange={onTodolistIdChangeHandler}
                    />
                </div>
                <div>
                    <input
                        value={todolistTitle}
                        placeholder={'todolist title'}
                        onChange={onTodolistTitleChangeHandler}
                    />
                </div>
                <button onClick={updateTodolistTitle}>update todolist title</button>
            </div>
            {JSON.stringify(state)}
        </div>
    )
}

export const GetTasks = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState('')

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTodolistId(e.currentTarget.value)
    }

    const getTasks = () => {
        todolistsAPI.getTasks(todolistId)
            .then((res) => {
                setState(res.data.items.map(el => `todolistID: ${el.todoListId}, --- task: ${el.title}, --- taskID: ${el.id}`))
            }).then(() => {
            setTodolistId('')
        })
    }

    return (
        <div>
            <div>
                <input
                    value={todolistId}
                    placeholder={'todolist id'}
                    onChange={onChangeHandler}
                />
                <button onClick={getTasks}>get tasks</button>
            </div>
            {JSON.stringify(state)}
        </div>
    )
}

export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState('')
    const [title, setTitle] = useState('')

    const onTodolistIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodolistId(e.currentTarget.value)
    }

    const onTaskIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const createTask = () => {
        todolistsAPI.createTask(todolistId, title)
            .then((res) => {
                setState(res.data)
            }).then(() => {
            setTodolistId('')
            setTitle('')
        })
    }

    return (
        <div>
            <div>
                <div>
                    <input
                        value={todolistId}
                        placeholder={'todolistId'}
                        onChange={onTodolistIdInputChange}
                    />
                </div>
                <div>
                    <input
                        value={title}
                        placeholder={'task title'}
                        onChange={onTaskIdInputChange}
                    />
                </div>
                <div>
                    <button onClick={createTask}>create task</button>
                </div>
            </div>
            {JSON.stringify(state)}
        </div>
    )
}

export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState('')
    const [taskId, setTaskId] = useState('')

    const onTodolistIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodolistId(e.currentTarget.value)
    }

    const onTaskIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskId(e.currentTarget.value)
    }

    const deleteTask = () => {
        todolistsAPI.deleteTask(todolistId, taskId)
            .then((res) => {
                setState(res.data)
            }).then(() => {
            setTodolistId('')
            setTaskId('')
        })
    }

    return (
        <div>
            <div>
                <div>
                    <input
                        value={todolistId}
                        placeholder={'todolistId'}
                        onChange={onTodolistIdInputChange}
                    />
                </div>
                <div>
                    <input
                        value={taskId}
                        placeholder={'taskId'}
                        onChange={onTaskIdInputChange}
                    />
                </div>
                <div>
                    <button onClick={deleteTask}>delete task</button>
                </div>
            </div>
            {JSON.stringify(state)}
        </div>
    );
}

export const UpdateTask = () => {
    const [state, setState] = useState<any>(null)
    const [todolistId, setTodolistId] = useState('')
    const [taskId, setTaskId] = useState('')
    const [taskTitle, setTaskTitle] = useState('')

    const onTodolistIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodolistId(e.currentTarget.value)
    }

    const onTaskIdInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskId(e.currentTarget.value)
    }

    const onTaskTitleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }

    const updateTaskTitle = () => {
        todolistsAPI.updateTask(todolistId, taskId, taskTitle)
            .then((res) => {
                setState(res.data)
            }).then(() => {
            setTodolistId('')
            setTaskId('')
            setTaskTitle('')
        })
    }

    return (
        <div>
            <div>
                <div>
                    <input
                        value={todolistId}
                        placeholder={'todolist id'}
                        onChange={onTodolistIdInputChange}
                    />
                </div>
                <div>
                    <input
                        value={taskId}
                        placeholder={'task id'}
                        onChange={onTaskIdInputChange}
                    />
                </div>
                <div>
                    <input
                        value={taskTitle}
                        placeholder={'task title'}
                        onChange={onTaskTitleInputChange}
                    />
                </div>
                <div>
                    <button onClick={updateTaskTitle}>update task title</button>
                </div>
            </div>
            {JSON.stringify(state)}
        </div>
    );
}
