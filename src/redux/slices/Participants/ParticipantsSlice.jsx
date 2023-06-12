import { createSlice } from "@reduxjs/toolkit";
import { fetchAllPlayers, registerPlayer } from "./participantsActions";


const initialState = {
    fetchAllPlayers: {isLoading: false, value: [], isError: false},
    registerPlayer: {isLoading: false, value:{}, isError: false}
}

const participantsSlice = createSlice({
    name: "participants",
    initialState,
    reducers: {},
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
          })
          .addCase(registerPlayer.rejected, (state, action) => {
            console.log("Error while fetching games", action.error.message);
            state.registerPlayer.isError = true;
          })

          
    }
})


export default participantsSlice