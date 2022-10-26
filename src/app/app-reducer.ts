import {Dispatch} from 'redux'
import {authAPI} from 'api/todolists-api'
import {setIsLoggedInAC} from 'features/Login/auth-reducer'
import {createSlice, PayloadAction} from '@reduxjs/toolkit'

const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
}

const slice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{status: RequestStatusType}>) {
            state.status = action.payload.status
        },
        setAppErrorAC(state, action: PayloadAction<{error: string | null}>) {
            state.error = action.payload.error
        },
        setAppInitializedAC(state, action: PayloadAction<{value: boolean}>) {
            state.isInitialized = action.payload.value
        },
    },
})

export const appReducer = slice.reducer
export const {setAppStatusAC, setAppErrorAC, setAppInitializedAC} = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export const initializeAppTC = () => (dispatch: Dispatch) => {
    authAPI.me().then(res => {
        if (res.data.resultCode === 0) {
            dispatch(setIsLoggedInAC({value: true}))
        } else {

        }

        dispatch(setAppInitializedAC({value: true}))
    })
}

export type initialStateType = ReturnType<typeof appReducer>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>