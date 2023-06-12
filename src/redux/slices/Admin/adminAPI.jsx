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

export const creatGameAPI = async (requestData) => {
  try {
    const response = await axios.post("/admin/game", requestData);
    return response.data;
  } catch (error) {
    console.log("Error while calling fetchGamesAPI", error);
    throw error;
  }
};
