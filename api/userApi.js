import axios from "./axios";

export const signup = async (data) => {
  const response = await axios.post(`/signup`, data);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};

export const otpVerify = async (data) => {
  const response = await axios.post(`/otpVerify`, data);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};

export const login = async (data) => {
  const response = await axios.post(`/login`, data);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};

export const resendOtp = async (data) => {
  const response = await axios.post(`/resendOtp`, data);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};

export const forget = async (data) => {
  const response = await axios.post(`/forget`, data);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};

export const changePassword = async (data) => {
  const response = await axios.post(`/changePassword`, data);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};

export const updatePassword = async (data) => {
  const response = await axios.put(`/updatePassword`, data);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};

export const tokenVerification = async () => {
  const response = await axios.get(`/tokenVerify`);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};

export const getProfile = async () => {
  const response = await axios.get(`/profile`);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};

export const accountDeleteApi = async () => {
  const response = await axios.delete(`/deleteUser`);
  if (!response?.statusText === "OK") {
      throw new Error("Something is wrong.");
  }
  return response?.data
}
