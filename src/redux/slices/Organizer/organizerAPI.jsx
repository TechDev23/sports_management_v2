import axios from "../../axios";

export const fetchAllOrganizerAPI = async () =>{
    try {
        console.log("request data from fetchAllOrganizerAPI")
        const res = await axios.get(`/organizer/`)
        return res.data
    } catch (error) {
        console.log("Error while call fetch all organizer", error);
        throw error; 
    }
}
export const fetchOrganizerByIDAPI = async (reqData) =>{
    try {
        console.log("request data from organizer by id", reqData)
        const res = await axios.get(`/organizer/${reqData.id}`)
        return res.data
    } catch (error) {
        console.log("Error while call fetch orgainzer by id", error);
        throw error; 
    }
}

export const createOrganizationAPI = async (reqData) =>{
    try {
        console.log("request data from create organizer", reqData)
        const res = await axios.post(`/organizer/`, reqData)
        return res.data
    } catch (error) {
        console.log("Error while call create organizer", error);
        throw error; 
    }
}