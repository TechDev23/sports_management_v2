import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../axios";

export const fetchGames = createAsyncThunk("fetchGames", async () => {
  try {
    const response = await axios.get("/admin/game");
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error while calling fetch games", error);
  }
});

export const createGame = createAsyncThunk(
  "createGame",
  async (requestData, thunkAPI) => {
    try {
      const response = await axios.post("/tournament", requestData);
      console.log("response" ,response)
      return response;
    } catch (error) {
      // Handle error scenarios
      console.log("I am here")
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const fetchOnGoingTournaments = createAsyncThunk("fetchOnGoingTournaments", async()=>{
  try {
    const response = await axios.get("/tournament/?isActive=true")
    const data = response.data;
    return data;
  } catch (error) {
    console.log("Error while calling fetchOnGoingTournaments", error);
  }
})

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
};
export const AdminReducer = createSlice({
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
  },
});



// eslint-disable-next-line react-refresh/only-export-components
// export const { login, logout } = UserSlice.actions
