import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  creatGameAPI,
  fetchGamesAPI,
  createGameAPI,
  fetchOnGoingTournamentsAPI,
} from "./adminAPI";

export const fetchGames = createAsyncThunk("fetchGames", async () => {
  return fetchGamesAPI();
});

export const creatGame = createAsyncThunk(
  "creatGame",
  async (requestData, thunkAPI) => {
    try {
      return creatGameAPI(requestData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
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
