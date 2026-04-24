export const loginUser = async (data) => {
  try {
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Login failed" };
  }
};

export const registerUser = async (data) => {
  try {
    const res = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Registration failed" };
  }
};

export const getProfile = async () => {
  try {
    const res = await fetch("/api/auth/profile");
    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to get profile" };
  }
};

export const updateProfile = async (data) => {
  try {
    const res = await fetch("/api/auth/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to update profile" };
  }
};

export const changePassword = async (data) => {
  try {
    const res = await fetch("/api/auth/change-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to change password" };
  }
};

export const logoutUser = async () => {
  try {
    const res = await fetch("/api/auth/logout", {
      method: "POST",
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Logout failed" };
  }
};

export const refreshToken = async () => {
  try {
    const res = await fetch("/api/auth/refresh-token", {
      method: "POST",
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Token refresh failed" };
  }
};

export const forgotPassword = async (data) => {
  try {
    const res = await fetch("/api/auth/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to send reset email" };
  }
};

export const verifyResetToken = async (token) => {
  try {
    const res = await fetch(`/api/auth/verify-reset-token/${token}`);
    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Invalid or expired reset token" };
  }
};

export const resetPassword = async (token, data) => {
  try {
    const res = await fetch(`/api/auth/reset-password/${token}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await res.json();
    return result;
  } catch (error) {
    return { success: false, message: "Failed to reset password" };
  }
};