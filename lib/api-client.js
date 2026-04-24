import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

export default apiClient;


apiClient.interceptors.response.use(
  res => res,
  async (error) => {
    if (error.response?.status === 401) {
      await fetch("/api/auth/refresh-token", {
        method: "POST",
      });

      return apiClient(error.config);
    }
    return Promise.reject(error);
  }
);