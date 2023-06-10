import axios from '../../axios'

export const getTeamByIDAPI = async (requestData)=>{
    try {
        console.log("request data from getTeamByID", requestData)
        const response  = await axios.get(`/team/${requestData.id}`)
        return response.data
    } catch (error) {
        console.log("Error while call getTeamByID", error);
        throw error; 
    }
}

export const approveTeamAPI = async(requestData)=>{
    try {
        console.log("approve team", requestData);
        const resposne = await axios.post(`/team/${requestData.id}/status`) 
        return resposne.data
    } catch (error) {
        console.log("Error while call approveTeamAPI", error.response.data);
        throw error; 
    }
}