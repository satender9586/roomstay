import axios from "./axios";

const headerData =
{
    headers: {
        'Content-Type': 'application/json'
    }
}

export const createRoomApi = async (data) => {
    const response = await axios.post(`/createRoom`, data, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

export const getAdminRoomByHotelApi = async (hotelId) => {
    const response = await axios.get(`/getMyHotelRooms/${hotelId}`, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

export const accountDeleteApi = async () => {
    const response = await axios.delete(`/deleteUser`);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

