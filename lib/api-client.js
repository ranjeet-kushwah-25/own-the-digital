import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
  
});

// Add request interceptor to include auth token
apiClient.interceptors.request.use(
  (config) => {
    // Get token from cookies (client-side only)
    let token = null;

    if (typeof window !== 'undefined') {
      // Client-side: access cookies from document
      token = document.cookie
        .split('; ')
        .find(row => row.startsWith('accessToken='))
        ?.split('=')[1];
    }

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default apiClient;

apiClient.interceptors.response.use(
  res => res,
  async (error) => {
    // Handle 401 Unauthorized - token expired or invalid
    if (error.response?.status === 401) {
      // Only try refresh on client-side
      if (typeof window !== 'undefined') {
        try {
          // Attempt to refresh the token
          const refreshResponse = await fetch("/api/auth/refresh-token", {
            method: "POST",
            credentials: "include",
          });

          if (refreshResponse.ok) {
            // Token refreshed successfully, retry the original request
            return apiClient(error.config);
          } else {
            // Refresh failed, clear tokens and redirect to login
            document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
            window.location.href = '/login';
          }
        } catch (refreshError) {
          // Refresh request failed, clear tokens and redirect to login
          document.cookie = 'accessToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          document.cookie = 'refreshToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
          window.location.href = '/login';
        }
      }
    }
    return Promise.reject(error);
  }
);