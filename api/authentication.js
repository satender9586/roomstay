import axios from "axios";

const headerData =
{
    headers: {
        'Content-Type': 'application/json'
    }
}


export const signup = async (data) => {
    const response = await axios.post(`http://localhost:3000/signup`, data, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

export const otpVerfiy = async (data) => {
    const response = await axios.post(`/otpVerify`, data, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}

export const login = async (data) => {
    const response = await axios.post(`/login`, data, headerData);
    if (!response.statusText === "OK") {
        throw new Error("Something is wrong.");
    }
    return response.data
}
