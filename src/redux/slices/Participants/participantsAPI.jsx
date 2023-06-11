import axios from "../../axios";

export const fetchAllPlayersAPI = async(reqData) =>{
    try {
        console.log("req data from fetchAllPlayerAPI", reqData)
        const res = await axios.get(`/student/`)
        return res.data
    } catch (error) {
        console.log("Error while call fetchAllPlayersAPI", error)
        throw error;
    }
}

export const registerPlayerAPI = async(reqData) =>{
    try {
        console.log("req data from registerPlayer", reqData)
        const res = await axios.post(`/student/`, reqData)
        return res.data
    } catch (error) {
        console.log("Error while registerPlayerAPI", error)
        throw error;
    }
}