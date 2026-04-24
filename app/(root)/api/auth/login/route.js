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

    const { accessToken, refreshToken } = res.data;

    const response = NextResponse.json({ success: true, msg: 'Login successful' });

    response.cookies.set("accessToken", accessToken, {
      httpOnly: true,
      secure: true,
    });

    response.cookies.set("refreshToken", refreshToken, {
      httpOnly: true,
      secure: true,
    });

    return response;
  } catch (error) {
    return catchError(error, "Login failed");
  }
}