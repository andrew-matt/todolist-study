import {authAPI} from 'api/todolists-api'
import {setIsLoggedInAC} from 'features/Login/auth-reducer'
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'

export const initializeAppTC = createAsyncThunk('app/initializeApp', async (param, {dispatch}) => {
    const res = await authAPI.me()
    if (res.data.resultCode === 0) {
        dispatch(setIsLoggedInAC({value: true}))
    }
})

const slice = createSlice({
    name: 'app',
    initialState: {
        status: 'idle' as RequestStatusType,
        error: null as string | null,
        isInitialized: false,
    },
    reducers: {
        setAppStatusAC(state, action: PayloadAction<{ status: RequestStatusType }>) {
            state.status = action.payload.status
        },
        setAppErrorAC(state, action: PayloadAction<{ error: string | null }>) {
            state.error = action.payload.error
        },
    },
    extraReducers: builder => {
        builder.addCase(initializeAppTC.fulfilled, state => {
            state.isInitialized = true
        })
    }
})

export const appReducer = slice.reducer
export const {setAppStatusAC, setAppErrorAC} = slice.actions

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'

export type initialStateType = ReturnType<typeof appReducer>
export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>