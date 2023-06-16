import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createTournamentAPI,
  fetchTournamentsAPI,
  getTournamentByIDAPI,
  getTournamentEntriesAPI,
  createTournamentFixturesAPI,
  getTournamentFixturesAPI,
  postMatchResultAPI,
  getMatchScoreAPI,
  postMatchScoreAPI,
} from "./tournamentAPI";

export const fetchTournaments = createAsyncThunk(
  "tournament/active",
  async (requestData, thunkAPI) => {
    try {
      return fetchTournamentsAPI(requestData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const createTournament = createAsyncThunk(
  "createGame",
  async (requestData, thunkAPI) => {
    try {
      return createTournamentAPI(requestData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getTournamentByID = createAsyncThunk(
  "getTournamentByid",
  async (reqData, thunkAPI) => {
    try {
      return getTournamentByIDAPI(reqData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getTournamentEntries = createAsyncThunk(
  "getTournamentEntries",
  async (reqData, thunkAPI) => {
    try {
      return getTournamentEntriesAPI(reqData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

// -----------------------
export const createTournamentFixtures = createAsyncThunk(
  "createTournamentFixture",
  async (reqData, thunkAPI) => {
    try {
      return createTournamentFixturesAPI(reqData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getTournamentFixtures = createAsyncThunk(
  "getTournamentFixtures",
  async (reqData, thunkAPI) => {
    try {
      return getTournamentFixturesAPI(reqData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postMatchResult = createAsyncThunk(
  "postMatchResult",
  async (reqData, thunkAPI) => {
    try {
      return postMatchResultAPI(reqData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const getMatchScore = createAsyncThunk(
  "getMatchScore",
  async (reqData, thunkAPI) => {
    try {
      return getMatchScoreAPI(reqData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const postMatchScore = createAsyncThunk(
  "postMatchScore",
  async (reqData, thunkAPI) => {
    try {
      return postMatchScoreAPI(reqData);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
