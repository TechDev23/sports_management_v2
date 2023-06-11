import { createAsyncThunk } from "@reduxjs/toolkit";
import { approveTeamAPI, getTeamByIDAPI } from "./teamAPI";

export const getTeamsByID = createAsyncThunk("teams/id",
    async(requestData, thunkAPI) => {
        try{
            return getTeamByIDAPI(requestData)
        }catch(error){
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const approveTeam = createAsyncThunk("teams/approve/status",

    async(requestData, thunkAPI) =>{
        try {
            return approveTeamAPI(requestData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }

)