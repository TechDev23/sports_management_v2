import { createSlice } from "@reduxjs/toolkit";
import { fetchGames, createGame, creatGame, fetchOnGoingTournaments } from "./adminActions";

const initialState = {
  fetchGames: { isLoading: false, value: [], isError: false },
  fetchOnGoingTournaments: { isLoading: false, value: [], isError: false },
  createGame: {
    value: {
      name: "",
      description: "",
      max_teams: 0,
      team_size: 0,
      total_matches: 0,
      isActive: true,
      organizer_id: 0,
      game_id: 0,
      start_date: "2023-05-29T07:12:56.222Z",
      end_date: "2023-05-29T07:12:56.222Z",
    },
    isLoading: false,
    isError: false 
  },
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

    builder.addCase(createGame.pending, (state, action) => {
      state.createGame.isLoading = true;
    });
    builder.addCase(createGame.fulfilled, (state, action) => {
      state.createGame.isLoading = false;
      state.createGame.value = action.payload;
      state.createGame.isError = false;
    });
    builder.addCase(createGame.rejected, (state, action) => {
      console.log("Error while creating game", action.error.message);
      state.createGame.isError = true;
    });


    builder.addCase(fetchOnGoingTournaments.pending, (state, action) => {
      state.createGame.isLoading = true;
    });
    builder.addCase(fetchOnGoingTournaments.fulfilled, (state, action) => {
      state.fetchOnGoingTournaments.isLoading = false;
      state.fetchOnGoingTournaments.value = action.payload;
      state.fetchOnGoingTournaments.isError = false;
    });
    builder.addCase(fetchOnGoingTournaments.rejected, (state, action) => {
      console.log("Error while fetching student", action.error.message);
      state.fetchOnGoingTournaments.isError = true;
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
