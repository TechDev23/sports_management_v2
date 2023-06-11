import { createSlice } from "@reduxjs/toolkit";
import { approveTeam, getTeamsByID } from "./teamActions";

const initialState = {
  getTeamsById: { isLoading: false, value: {}, isError: false },
  approveTeam: { isLoading: false, value: {}, isError: false }
};

const teamsSlice = createSlice({
    name:"teams",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        const setAsyncState = (state, action) => {
            state.isLoading = action.meta.requestStatus === "pending";
            state.value = action.payload;
            state.isError = action.meta.requestStatus === "rejected";
          };
          
          builder
            .addCase(getTeamsByID.pending, (state) => {
              state.getTeamsById.isLoading = true;
            })
            .addCase(getTeamsByID.fulfilled, (state, action) => {
              setAsyncState(state.getTeamsById, action);
            })
            .addCase(getTeamsByID.rejected, (state, action) => {
              console.log("Error while fetching games", action.error.message);
              state.getTeamsById.isError = true;
            })

          builder
            .addCase(approveTeam.pending, (state) => {
              state.approveTeam.isLoading = true;
            })
            .addCase(approveTeam.fulfilled, (state, action) => {
              setAsyncState(state.approveTeam, action);
            })
            .addCase(approveTeam.rejected, (state, action) => {
              console.log("Error while fetching games", action.error.message);
              state.approveTeam.isError = true;
            })
          
    }
})


export default teamsSlice
