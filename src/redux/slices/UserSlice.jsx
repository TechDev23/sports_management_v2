import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../axios";


export const fetchStudents = createAsyncThunk("fetchStudents", async ()=>{
    try {
        const response = await axios.get("/student")
        const data = response.data
        return data
    } catch (error) {
        console.log("Error while calling fetchstudent", error)
    }
    
})
const initialState = {isLoading:false, value:[], isError: false}
export const UserSlice = createSlice({
    name: "user",
    initialState,
    reducers:{
        login: (state, action)=>{
            state.value = action.payload
        }
        ,
        logout: ( state )=>{
            state.value = initialState.value;
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchStudents.pending, (state, action)=>{
            state.isLoading = true;
        })
        builder.addCase(fetchStudents.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.value = action.payload
            state.isError = false
        })
        builder.addCase(fetchStudents.rejected, (state, action)=>{
            console.log("Error while fetching student", action.error.message)
            state.isError = true
        })
    }
})

// eslint-disable-next-line react-refresh/only-export-components
export const { login, logout } = UserSlice.actions

