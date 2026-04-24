import apiClient from "@/lib/api-client";
import { useAuthStore } from "@/store/auth.store";

export const useAuth = () => {
  const { user, setUser } = useAuthStore();

  const login = async (data) => {
    const res = await apiClient.post("/auth/login", data);
    setUser(res.data.user);
  };

  const logout = async () => {
    await axios.post("/auth/logout");
    setUser(null);
  };

  return { user, login, logout };
};


