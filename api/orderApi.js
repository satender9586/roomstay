import axios from "./axios";

export const createOrder = async (data) => {
  const response = await axios.post(`/createOrder`, data);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};
