import { createSlice } from "@reduxjs/toolkit";
import { fetchGames, creatGame } from "./adminActions";

const initialState = {
  fetchGames: { isLoading: false, value: [], isError: false },  
  creatGame:{
    isLoading: false, value: {}, isError: false
  }
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGames.pending, (state, action) => {
      state.fetchGames.isLoading = true;
    });
    builder.addCase(fetchGames.fulfilled, (state, action) => {
      state.fetchGames.isLoading = false;
      state.fetchGames.value = action.payload;
      state.fetchGames.isError = false;
    });
    builder.addCase(fetchGames.rejected, (state, action) => {
      console.log("Error while fetching games", action.error.message);
      state.fetchGames.isError = true;
    });


    // creating game like tennis, 
    builder
      .addCase(creatGame.fulfilled, (state, action) =>{
        state.creatGame.isLoading = false;
        state.creatGame.value = action.payload;
        state.creatGame.isError = false;
      })
      .addCase(creatGame.rejected, (state, action) => {
        console.log("Error while creating game admin", action.error.message);
        state.creatGame.isError = true;
      })
      .addCase(creatGame.pending, (state, action) => {
        state.creatGame.isLoading = true;
      });
      
  },
});

export default adminSlice;
