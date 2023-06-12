import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllOrganizerAPI, createOrganizationAPI, fetchOrganizerByIDAPI } from "./organizerAPI";

export const fetchAllOrganizer = createAsyncThunk("organizer/fetch",
    async(thunkAPI)=>{
        try {
            return fetchAllOrganizerAPI()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const fetchOrganizationByID = createAsyncThunk("organizer/id",
    async(reqData, thunkAPI)=>{
        try {
            return fetchOrganizerByIDAPI(reqData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)
export const createOrganization = createAsyncThunk("organizer/create",
    async(reqData, thunkAPI)=>{
        try {
            return createOrganizationAPI(reqData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)












