import axios from "axios";

const api = axios.create({
  baseURL: process.env.VITE_API_URL || "http://localhost:8000",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
// handle session expiry -> redirect to login.page
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // If backend says "Unauthorized", redirect to login
      // Note: We use window.location to force a full refresh and clear client state
      if (
        typeof window !== "undefined" &&
        !window.location.pathname.includes("/login")
      ) {
        window.location.href = "/login";
      }
    }
    return Promise.reject(error);
  },
);
export default api;