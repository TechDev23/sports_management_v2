import { configureStore} from '@reduxjs/toolkit'
import { UserSlice } from './slices/UserSlice'
import adminSlice from './slices/Admin/AdminSlice'
import teamsSlice from './slices/Teams/TeamSlice'

export const store = configureStore({
    reducer:{
        user: UserSlice.reducer,
        admin: adminSlice.reducer,
        team: teamsSlice.reducer
    },
})

