import { create } from "zustand";
import { persist } from "zustand/middleware";
import { loginUser, registerUser, logoutUser, getProfile } from "@/services/auth.service";

export const useAuthStore = create(
  persist(
    (set, get) => ({
      user: null,
      isLoading: false,
      error: null,
      isAuthenticated: false,

      login: async (credentials) => {
        set({ isLoading: true, error: null });
        try {
          const result = await loginUser(credentials);
          if (result.success) {
            set({
              user: result.user,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            return { success: true, user: result.user };
          } else {
            set({
              error: result.message || "Login failed",
              isLoading: false,
            });
            return { success: false, error: result.message };
          }
        } catch (error) {
          const errorMessage = "An error occurred during login";
          set({
            error: errorMessage,
            isLoading: false,
          });
          return { success: false, error: errorMessage };
        }
      },

      register: async (userData) => {
        set({ isLoading: true, error: null });
        try {
          const result = await registerUser(userData);

          if (result.success) {
            set({
              user: result.user || null,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            return { success: true, user: result.user };
          } else {
            set({
              error: result.message || "Registration failed",
              isLoading: false,
            });
            return { success: false, error: result.message };
          }
        } catch (error) {
          const errorMessage = "An error occurred during registration";
          set({
            error: errorMessage,
            isLoading: false,
          });
          return { success: false, error: errorMessage };
        }
      },

      logout: async () => {
        set({ isLoading: true });
        try {
          await logoutUser();
        } catch (error) {
          console.error("Logout API error:", error);
        } finally {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: null,
          });
        }
      },

      clearError: () => set({ error: null }),

      setUser: (user) => set({ user, isAuthenticated: !!user }),

      checkAuth: async () => {
        set({ isLoading: true, error: null });
        try {
          const result = await getProfile();

          if (result.success) {
            set({
              user: result.user || result.data,
              isAuthenticated: true,
              isLoading: false,
              error: null,
            });
            return { success: true, user: result.user || result.data };
          } else {
            set({
              user: null,
              isAuthenticated: false,
              isLoading: false,
              error: result.message || "Authentication check failed",
            });
            return { success: false, error: result.message };
          }
        } catch (error) {
          set({
            user: null,
            isAuthenticated: false,
            isLoading: false,
            error: "Failed to verify authentication",
          });
          return { success: false, error: "Failed to verify authentication" };
        }
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({
        user: state.user,
        isAuthenticated: state.isAuthenticated,
      }),
    }
  )
);