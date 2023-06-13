import axios from '../../axios'

export const fetchTournamentsAPI = async (requestData)=>{
    try {
        console.log("request data from fetch tournament", requestData)
        const response  = await axios.get(`/tournament/?isActive=${requestData.isActive}`)
        return response.data
    } catch (error) {
        console.log("Error while call fetch tournament", error);
        throw error; 
    }
}

export const createTournamentAPI = async (requestData) => {
    try {
      const response = await axios.post("/tournament", requestData);
      return response.data;
    } catch (error) {
      console.log("Error while calling createGameAPI", error);
      throw error;
    }
  };

export const getTournamentByIDAPI = async(reqData) =>{
    try {
        const res = await axios.get(`/tournament/${reqData.id}`)
        return res.data
    } catch (error) {
        console.log("Error while call get tournament by id", error);
        throw error;
    }
}

export const getTournamentEntriesAPI = async(reqData) =>{
    try {
        const res = await axios.get(`/tournament/${reqData.id}/entries?isApproved=${reqData.isApproved}`)
        return res.data
    } catch (error) {
        console.log("Error while call get tournament by id", error);
        throw error;
    }
}

// -------------------
export const createTournamentFixturesAPI = async(reqData) =>{
    try {
        const res = await axios.post(`/tournament/${reqData.id}/fixtures`)
        return res.data
    } catch (error) {
        console.log("Error while call get tournament by id", error);
        throw error;
    }
}

export const getTournamentFixturesAPI = async(reqData) =>{
    try {
        // console.log("data from getTournameFixtureAPI ", reqData)
        const res = await axios.get(`/tournament${reqData.id}/fixtures`)
        return res.data
    } catch (error) {
        console.log("Error while call get tournament fixtures", error);
        throw error;
    }
}

export const postMatchResultAPI = async(reqData)=>{
    try {
        const res = await axios.post(`/tournament${reqData.id}/match/${reqData.match_id}?winner_id=${reqData.winner_id}`,  {winner_id: reqData.winner_id})
        return res.data
    } catch (error) {
        console.log("Error while call post match result", error);
        throw error;
    }
}

export const getMatchScoreAPI = async(reqData)=>{
    try {
        const res = await axios.get(`/tournament${reqData.id}/match/${reqData.match_id}/score`)
        return res.data
    } catch (error) {
        console.log("Error while call get match score", error);
        throw error;
    }
}


export const postMatchScoreAPI = async(reqData)=>{
    try {
        const res = await axios.post(`/tournament${reqData.id}/match/${reqData.match_id}/score`, reqData)
        return res.data
    } catch (error) {
        console.log("Error while call get match score", error);
        throw error;
    }
}

