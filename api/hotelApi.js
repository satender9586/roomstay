import axios from "./axios";

const headerData =
{
    headers: {
        'Content-Type': 'application/json'
    }
}

export const createHotelApi = async (data) => {
    const response = await axios.post(`/createHotel`, data, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

export const getAdminHotelsApi = async () => {
    const response = await axios.get(`/getMyHotels`, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

