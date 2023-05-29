import { configureStore} from '@reduxjs/toolkit'
import { UserSlice } from './slices/UserSlice'
import { AdminReducer } from './slices/Admin/AdminSlice'

export const store = configureStore({
    reducer:{
        user: UserSlice.reducer,
        admin: AdminReducer.reducer,
    },
})



