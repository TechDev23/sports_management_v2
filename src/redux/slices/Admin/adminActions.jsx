import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  creatGameAPI,
  fetchGamesAPI,
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