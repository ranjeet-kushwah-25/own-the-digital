import { NextResponse } from "next/server";
import apiClient from "@/lib/api-client";

export async function POST(req) {
  const refreshToken = req.headers.get("cookie");

  const res = await apiClient.post(
    `${process.env.BACKEND_URL}/api/auth/refresh-token`,
    {},
    { headers: { cookie: refreshToken || "" } }
  );

  const response = NextResponse.json({});

  response.cookies.set("accessToken", res.data.accessToken, {
    httpOnly: true,
  });

  return response;
}