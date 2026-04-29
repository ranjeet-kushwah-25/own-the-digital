import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function POST(req) {
  const body = await req.json();

  try {
    const res = await apiClient.post(
      `${process.env.BACKEND_URL}/api/auth/register`,
      body
    );

    const { accessToken, refreshToken, user } = res.data;

    const response = NextResponse.json({
      success: true,
      user: user || null
    });

    if (accessToken) {
      response.cookies.set("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
      });
    }

    if (refreshToken) {
      response.cookies.set("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        path: '/'
      });
    }

    return response;
  } catch (error) {
    return catchError(error, "Register failed");
  }
}