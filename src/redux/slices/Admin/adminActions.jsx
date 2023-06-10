import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchGamesAPI,
  createGameAPI,
  fetchOnGoingTournamentsAPI,
} from "./adminAPI";

export const fetchGames = createAsyncThunk("fetchGames", async () => {
  return fetchGamesAPI();
});

export const createGame = createAsyncThunk(
  "createGame",
  async (requestData, thunkAPI) => {
    try {
      return createGameAPI(requestData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchOnGoingTournaments = createAsyncThunk(
  "fetchOnGoingTournaments",
  async () => {
    return fetchOnGoingTournamentsAPI();
  }
);
