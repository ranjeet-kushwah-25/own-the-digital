import { useAuthStore } from "@/store/auth.store";

export const useAuth = () => {
  const {
    user,
    isAuthenticated,
    isLoading,
    error,
    login: storeLogin,
    logout: storeLogout,
    register: storeRegister,
    clearError,
    setUser,
    checkAuth: storeCheckAuth
  } = useAuthStore();

  const login = async (credentials) => {
    return await storeLogin(credentials);
  };

  const logout = async () => {
    return await storeLogout();
  };

  const register = async (userData) => {
    return await storeRegister(userData);
  };

  const checkAuth = async () => {
    return await storeCheckAuth();
  };

  return {
    user,
    isAuthenticated,
    isLoading,
    error,
    login,
    logout,
    register,
    checkAuth,
    clearError,
    setUser
  };
};


