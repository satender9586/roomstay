import axios from "./axios";

export const createHotelApi = async (data) => {
    const response = await axios.post(`/createHotel`, data);
    if (!response?.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response?.data
}

export const getAdminHotelsApi = async () => {
    const response = await axios.get(`/getMyHotels`);
    console.log(response)
    if (!response?.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response?.data

}

