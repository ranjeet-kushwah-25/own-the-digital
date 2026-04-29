import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function POST(req) {
  const body = await req.json();

  try {
    const res = await apiClient.post(
      `${process.env.BACKEND_URL}/api/auth/login`,
      body
    );

    // ✅ Correct destructuring
    const { user, token, refreshToken } = res.data.data;

    const response = NextResponse.json({
      success: true,
      message: "Login successful",
      user, // ✅ correct
    });

    // ✅ Set cookies correctly
    if (token) {
      response.cookies.set("accessToken", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
    }

    if (refreshToken) {
      response.cookies.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
      });
    }

    return response;
  } catch (error) {
    return catchError(error, "Login failed");
  }
}