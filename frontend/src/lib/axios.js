import axios from "axios";

const apiBaseURL = import.meta.env.VITE_API_BASE_URL || "/api";

const api = axios.create({
  baseURL: apiBaseURL,
});

export default api;
