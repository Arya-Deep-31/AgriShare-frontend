import axios from "axios";

const API_URL = "https://agri-share-back-end.vercel.app/api/v1/user/";

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL, userData);
  if (response.data) {
    localStorage.setItem("agriUser", JSON.stringify(response.data));
  }
  return response.data;
};
// Login user
const login = async (userData) => {
  const response = await axios.post(`${API_URL}login`, userData);
  if (response.data) {
    localStorage.setItem("agriUser", JSON.stringify(response.data));
  }
  return response.data;
};
const logout = () => {
  localStorage.removeItem("agriUser");
};
const authService = {
  register,
  logout,
  login,
};
export default authService;
