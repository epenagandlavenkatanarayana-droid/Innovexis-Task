import axiosInstance from "./axiosInstance";

// 🔹 named exports (recommended for auth)
export const loginApi = async (data) => {
  const response = await axiosInstance.post("/auth/login", data);
  return response.data;
};

export const registerApi = async (data) => {
  const response = await axiosInstance.post("/auth/register", data);
  return response.data;
};

// 🔹 default export (for people importing API)
const AuthAPI = {
  loginApi,
  registerApi,
};

export default AuthAPI;
