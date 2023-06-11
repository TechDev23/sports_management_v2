import { configureStore} from '@reduxjs/toolkit'
import { UserSlice } from './slices/UserSlice'
import adminSlice from './slices/Admin/AdminSlice'
import teamsSlice from './slices/Teams/TeamSlice'
import participantsSlice from './slices/Participants/ParticipantsSlice'

export const store = configureStore({
    reducer:{
        user: UserSlice.reducer,
        admin: adminSlice.reducer,
        team: teamsSlice.reducer,
        participants: participantsSlice.reducer
    },
})

