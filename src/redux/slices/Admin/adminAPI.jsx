import axios from "../../axios";

export const fetchGamesAPI = async () => {
  try {
    const response = await axios.get("/admin/game");
    return response.data;
  } catch (error) {
    console.log("Error while calling fetchGamesAPI", error);
    throw error;
  }
};

export const createGameAPI = async (requestData) => {
  try {
    const response = await axios.post("/tournament", requestData);
    return response.data;
  } catch (error) {
    console.log("Error while calling createGameAPI", error);
    throw error;
  }
};

export const fetchOnGoingTournamentsAPI = async () => {
  try {
    const response = await axios.get("/tournament/?isActive=true");
    return response.data;
  } catch (error) {
    console.log("Error while calling fetchOnGoingTournamentsAPI", error);
    throw error;
  }
};
