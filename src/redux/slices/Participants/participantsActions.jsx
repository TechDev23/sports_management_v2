import { createAsyncThunk } from "@reduxjs/toolkit";
import { fetchAllPlayersAPI, registerPlayerAPI } from "./participantsAPI";

export const fetchAllPlayers = createAsyncThunk("/student/", 
    async(thunkAPI)=>{
        try {
            return fetchAllPlayersAPI()
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }
)

export const registerPlayer = createAsyncThunk("student/register",

    async(reqData, thunkAPI)=>{
        try {
            return registerPlayerAPI(reqData)
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data)
        }
    }

)