
// src/services/authService.js
import api from "./api";

export const register = async (userData) => {
  const { data } = await api.post("/users/register", userData);
  localStorage.setItem("token", data.token);
  return data.user;
};

export const login = async (credentials) => {
  const { data } = await api.post("/users/login", credentials);
  localStorage.setItem("token", data.token);
  return data.user;
};

export const getCurrentUser = async () => {
  const { data } = await api.get("/users/profile");
  return data;
};

export const logout = () => {
  localStorage.removeItem("token");
};


// previous version - *** example of API_URL usage

// const API_URL = "http://localhost:5000/api/users";

// // ✅ Login user
// const login = async (userData) => {
//   const response = await axios.post(`${API_URL}/login`, userData, {
//     withCredentials: true,
//   });
//   return response.data;
// }; ***


// final? version

// import api from "./api";

// // ✅ Register
// const register = async (userData) => {
//   try {
//     const response = await api.post("/user/register", userData);
//     return {
//       success: true,
//       user: response.data.user,
//       message: response.data.message,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       user: null,
//       message: error.response?.data?.message || "Registration failed",
//     };
//   }
// };

// // ✅ Login
// const login = async (userData) => {
//   try {
//     const response = await api.post("/user/login", userData);
//     return {
//       success: true,
//       user: response.data.user,
//       message: response.data.message,
//     };
//   } catch (error) {
//     return {
//       success: false,
//       user: null,
//       message: error.response?.data?.message || "Login failed",
//     };
//   }
// };

// // ✅ Logout
// const logout = async () => {
//   try {
//     await api.post("/user/logout");
//     return { success: true, message: "Logged out successfully" };
//   } catch (error) {
//     return {
//       success: false,
//       message: error.response?.data?.message || "Logout failed",
//     };
//   }
// };

// // ✅ Get current user from localStorage
// const getCurrentUser = () => {
//   const userStr = localStorage.getItem("user");
//   return userStr ? JSON.parse(userStr) : null;
// };

// // Export in one object
// const authService = {
//   register,
//   login,
//   logout,
//   getCurrentUser,
// };

// export default authService;


// previous version


// import api from "./api";

// export const login = async (credentials) => {
//   const res = await api.post("/auth/login", credentials, { withCredentials: true });
//   return res.data;
// };

// export const register = async (formData) => {
//   const res = await api.post("/auth/register", formData, { withCredentials: true });
//   return res.data;
// };

// export const logout = async () => {
//   const res = await api.post("/auth/logout", {}, { withCredentials: true });
//   return res.data;
// };

// export const getCurrentUser = async () => {
//   const res = await api.get("/auth/me", { withCredentials: true });
//   return res.data;
// };

// beginning of the final update 
// import api from "./api";

// // Register new user
// export const registerUser = async (userData) => {
//   const res = await api.post("/auth/signup", userData);
//   return res.data;
// };

// // Login user
// export const loginUser = async (credentials) => {
//   const res = await api.post("/auth/login", credentials);
//   if (res.data.token) {
//     localStorage.setItem("token", res.data.token);
//     localStorage.setItem("user", JSON.stringify(res.data.user));
//   }
//   return res.data;
// };

// // Logout
// export const logoutUser = () => {
//   localStorage.removeItem("token");
//   localStorage.removeItem("user");
// };

// // Get current profile
// export const getProfile = async () => {
//   const res = await api.get("/auth/profile");
//   return res.data;
// };

// before that
// import api from "./api";
// 
// const register = async (userData) => {
// const response = await api.post("/users/register", userData);
// if (response.data.token) {
// localStorage.setItem("token", response.data.token);
// localStorage.setItem("user", JSON.stringify(response.data.user));
// }
// return response.data;
// };
// 
// const login = async (credentials) => {
// const response = await api.post("/users/login", credentials);
// if (response.data.token) {
// localStorage.setItem("token", response.data.token);
// localStorage.setItem("user", JSON.stringify(response.data.user));
// }
// return response.data;
// };
// 
// const logout = () => {
// localStorage.removeItem("token");
// localStorage.removeItem("user");
// };
// 
// const getCurrentUser = () => {
// const user = localStorage.getItem("user");
// return user ? JSON.parse(user) : null;
// };
// 
// const authService = {
// register,
// login,
// logout,
// getCurrentUser,
// };
// 
// export default authService;
