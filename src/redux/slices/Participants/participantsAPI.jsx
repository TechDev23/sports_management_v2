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

export const joinTournamentAPI = async(reqData) =>{
    try {
        console.log("req data from join tournament", reqData)
        const res = await axios.post(`/student/tournament/join?tournament_id=${reqData.tournament_id}&student_id=${reqData.student_id}&team_name=${reqData.team_name}`, reqData)
        return res.data
    } catch (error) {
        console.log("Error while join tournament api", error)
        throw error;
    }
}