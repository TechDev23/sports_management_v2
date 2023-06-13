import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPlayers, joinTournament, registerPlayer } from "./participantsActions";


const initialState = {
    fetchAllPlayers: {isLoading: false, value: [], isError: false},
    registerPlayer: {isLoading: false, value:{}, isError: false},
    joinTournament: {isLoading: false, value:{}, isError: false}
}

const participantsSlice = createSlice({
    name: "participants",
    initialState,
    reducers: {
      setParticipant: (state, action)=>{
        state.registerPlayer = action.payload
      }
    },
    extraReducers:(builder)=>{
        const setAsyncState = (state, action) => {
            state.isLoading = action.meta.requestStatus === "pending";
            state.value = action.payload;
            state.isSuccess = action.meta.requestStatus === "fulfilled"
            state.isError = action.meta.requestStatus === "rejected";
          };

          builder
          .addCase(fetchAllPlayers.pending, (state) => {
            state.fetchAllPlayers.isLoading = true;
          })
          .addCase(fetchAllPlayers.fulfilled, (state, action) => {
            setAsyncState(state.fetchAllPlayers, action);
          })
          .addCase(fetchAllPlayers.rejected, (state, action) => {
            console.log("Error while fetching games", action.error.message);
            state.fetchAllPlayers.isError = true;
          })


          builder
          .addCase(registerPlayer.pending, (state) => {
            state.registerPlayer.isLoading = true;
          })
          .addCase(registerPlayer.fulfilled, (state, action) => {
            setAsyncState(state.registerPlayer, action);
            localStorage.setItem("participant", JSON.stringify(action.payload))
          })
          .addCase(registerPlayer.rejected, (state, action) => {
            console.log("Error while fetching games", action.error.message);
            state.registerPlayer.isError = true;
          })

          
          builder
          .addCase(joinTournament.pending, (state) => {
            state.joinTournament.isLoading = true;
          })
          .addCase(joinTournament.fulfilled, (state, action) => {
            setAsyncState(state.joinTournament, action);
          })
          .addCase(joinTournament.rejected, (state, action) => {
            console.log("Error while fetching games", action.error.message);
            state.joinTournament.isError = true;
          })

          
    }
})

export const { setParticipant } = participantsSlice.actions;
export default participantsSlice