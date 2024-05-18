import axios from "./axios";


export const createRoomApi = async (data) => {
    const response = await axios.post(`/createRoom`, data);
    if (!response?.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response?.data
}

export const getAdminRoomByHotelApi = async (hotelId) => {
    const response = await axios.get(`/getMyHotelRooms/${hotelId}`);
    if (!response?.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response?.data
}



export const getAllRooms = async () => {
    const response = await axios.get(`/getAllRooms`);
    if (!response?.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response?.data
}

