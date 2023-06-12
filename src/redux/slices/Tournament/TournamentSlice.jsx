import { createSlice } from "@reduxjs/toolkit";
import { fetchTournaments, createTournament, getTournamentByID, getTournamentEntries,
    createTournamentFixtures
,getTournamentFixtures
,postMatchResult
,getMatchScore
,postMatchScore
} from "./tournamentAction";

const initialState = {
  fetchTournament: { isLoading: false, value: [], isError: false },
  createTournament: {
    value: {},
    isLoading: false,
    isSuccess: false,
    isError: false 
  },
  getTournamentByID: { isLoading: false, value: {}, isError: false },
  getTournamentEntries: { isLoading: false, value: {}, isError: false },
  // ------------
  createTournamentFixtures: { isLoading: false, value: {}, isError: false },
  getTournamentFixtures: { isLoading: false, value: {}, isError: false },
  postMatchResult: { isLoading: false, value: {}, isError: false },
  getMatchScore:  { isLoading: false, value: {}, isError: false },
  postMatchScore: { isLoading: false, value: {}, isError: false }
};

const tournamentSlice = createSlice({
    name:"tournament",
    initialState,
    reducers:{},
    extraReducers:(builder) =>{
        const setAsyncState = (state, action) => {
            state.isLoading = action.meta.requestStatus === "pending";
            state.value = action.payload;
            state.isSuccess = action.meta.requestStatus === "fulfilled";
            state.isError = action.meta.requestStatus === "rejected";
          };
          
          builder
            .addCase(fetchTournaments.pending, (state) => {
              state.fetchTournament.isLoading = true;
            })
            .addCase(fetchTournaments.fulfilled, (state, action) => {
              setAsyncState(state.fetchTournament, action);
            })
            .addCase(fetchTournaments.rejected, (state, action) => {
              console.log("Error while fetching games", action.error.message);
              state.fetchTournament.isError = true;
            })
            

            builder
            .addCase(createTournament.pending, (state) => {
                state.createTournament.isLoading = true;
              })
            .addCase(createTournament.fulfilled, (state, action) => {
                setAsyncState(state.createTournament, action)
                localStorage.setItem("createdTournamentID", action.payload.id)
              })
            .addCase(createTournament.rejected, (state, action) => {
                console.log("Error while creating game", action.error.message);
                state.createTournament.isError = true;
              });

            
            builder
            .addCase(getTournamentEntries.pending, (state) => {
                state.getTournamentEntries.isLoading = true;
              })
            .addCase(getTournamentEntries.fulfilled, (state, action) => {
                setAsyncState(state.getTournamentEntries, action)
              })
            .addCase(getTournamentEntries.rejected, (state, action) => {
                console.log("Error while creating game", action.error.message);
                state.getTournamentEntries.isError = true;
              });

            
            builder
            .addCase(getTournamentByID.pending, (state) => {
                state.getTournamentByID.isLoading = true;
              })
            .addCase(getTournamentByID.fulfilled, (state, action) => {
                setAsyncState(state.getTournamentByID, action)
              })
            .addCase(getTournamentByID.rejected, (state, action) => {
                console.log("Error while creating game", action.error.message);
                state.getTournamentByID.isError = true;
              });

            // ------------------------------
            builder
            .addCase(createTournamentFixtures.pending, (state) => {
                state.createTournamentFixtures.isLoading = true;
              })
            .addCase(createTournamentFixtures.fulfilled, (state, action) => {
                setAsyncState(state.createTournamentFixtures, action)
              })
            .addCase(createTournamentFixtures.rejected, (state, action) => {
                console.log("Error while creating game", action.error.message);
                state.createTournamentFixtures.isError = true;
              });

            
            builder
            .addCase(getTournamentFixtures.pending, (state) => {
                state.getTournamentFixtures.isLoading = true;
              })
            .addCase(getTournamentFixtures.fulfilled, (state, action) => {
                setAsyncState(state.getTournamentFixtures, action)
              })
            .addCase(getTournamentFixtures.rejected, (state, action) => {
                console.log("Error while creating game", action.error.message);
                state.getTournamentFixtures.isError = true;
              });

            
            builder
            .addCase(postMatchResult.pending, (state) => {
                state.postMatchResult.isLoading = true;
              })
            .addCase(postMatchResult.fulfilled, (state, action) => {
                setAsyncState(state.postMatchResult, action)
              })
            .addCase(postMatchResult.rejected, (state, action) => {
                console.log("Error while creating game", action.error.message);
                state.postMatchResult.isError = true;
              });

            
            builder
            .addCase(getMatchScore.pending, (state) => {
                state.getMatchScore.isLoading = true;
              })
            .addCase(getMatchScore.fulfilled, (state, action) => {
                setAsyncState(state.getMatchScore, action)
              })
            .addCase(getMatchScore.rejected, (state, action) => {
                console.log("Error while creating game", action.error.message);
                state.getMatchScore.isError = true;
              });

            
            builder
            .addCase(postMatchScore.pending, (state) => {
                state.postMatchScore.isLoading = true;
              })
            .addCase(postMatchScore.fulfilled, (state, action) => {
                setAsyncState(state.postMatchScore, action)
              })
            .addCase(postMatchScore.rejected, (state, action) => {
                console.log("Error while creating game", action.error.message);
                state.postMatchScore.isError = true;
              });
    }
})


export default tournamentSlice
