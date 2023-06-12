import { createSlice } from "@reduxjs/toolkit";
import { fetchAllOrganizer, createOrganization, fetchOrganizationByID } from "./organizerActions";

const initialState = {
    fetchOrgs: { isLoading: false, value: [], isError: false },
    createOrg: { isLoading: false, value: {}, isError: false, isSuccess: false },
    fetchOrgsById: { isLoading: false, value: {}, isError: false }
}

const organizerSlice = createSlice({
    name:"organizers",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        const setAsyncState = (state, action) => {
            state.isLoading = action.meta.requestStatus === "pending";
            state.value = action.payload;
            state.isSuccess = true
            state.isError = action.meta.requestStatus === "rejected";
          };
          
          builder
            .addCase(fetchAllOrganizer.pending, (state) => {
              state.fetchOrgs.isLoading = true;
            })
            .addCase(fetchAllOrganizer.fulfilled, (state, action) => {
              setAsyncState(state.fetchOrgs, action);
            })
            .addCase(fetchAllOrganizer.rejected, (state, action) => {
              console.log("Error while fetching games", action.error.message);
              state.fetchOrgs.isError = true;
            })
          
          builder
            .addCase(createOrganization.pending, (state) => {
              state.createOrg.isLoading = true;
            })
            .addCase(createOrganization.fulfilled, (state, action) => {
              setAsyncState(state.createOrg, action);
            })
            .addCase(createOrganization.rejected, (state, action) => {
              console.log("Error while fetching games", action.error.message);
              state.createOrg.isError = true;
            })
          
          builder
            .addCase(fetchOrganizationByID.pending, (state) => {
              state.fetchOrgsById.isLoading = true;
            })
            .addCase(fetchOrganizationByID.fulfilled, (state, action) => {
              setAsyncState(state.fetchOrgsById, action);
            })
            .addCase(fetchOrganizationByID.rejected, (state, action) => {
              console.log("Error while fetching games", action.error.message);
              state.fetchOrgsById.isError = true;
            })
    }
})

export default organizerSlice