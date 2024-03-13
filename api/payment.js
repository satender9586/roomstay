import axios from "./axios";

export const paymentInit = async (data) => {
  const response = await axios.post(`/paymentInit`,data);
  if (!response?.statusText === "OK") {
    throw new Error("Something is wrong.");
  }
  return response?.data;
};
