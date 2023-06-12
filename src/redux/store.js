import { configureStore} from '@reduxjs/toolkit'
import { UserSlice } from './slices/UserSlice'
import adminSlice from './slices/Admin/AdminSlice'
import teamsSlice from './slices/Teams/TeamSlice'
import participantsSlice from './slices/Participants/ParticipantsSlice'
import organizerSlice from './slices/Organizer/OrganizerSlice'
import tournamentSlice from './slices/Tournament/TournamentSlice'

export const store = configureStore({
    reducer:{
        user: UserSlice.reducer,
        admin: adminSlice.reducer,
        team: teamsSlice.reducer,
        participants: participantsSlice.reducer,
        organizer: organizerSlice.reducer,
        tournament: tournamentSlice.reducer
    },
})

