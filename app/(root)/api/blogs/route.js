import { NextResponse } from "next/server";
import apiClient from "@/lib/api-client";
import { cookies } from "next/headers";

export async function GET() {
  try {
    console.log('Fetching blogs from backend:', `${process.env.BACKEND_URL}/api/blogs`);
    const res = await apiClient.get(`${process.env.BACKEND_URL}/api/blogs`);
    return NextResponse.json(res.data);
  } catch (error) {
    console.error('Backend API Error:', error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch blogs from backend",
        error: error.message
      },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    // ✅ Universal cookie parser (no cookies() dependency)
    const cookieHeader = req.headers.get("cookie") || "";

    const token = cookieHeader
      .split("; ")
      .find((row) => row.startsWith("accessToken="))
      ?.split("=")[1];

    console.log("TOKEN:", token);

    if (!token) {
      return NextResponse.json(
        { success: false, message: "Access denied. No token provided." },
        { status: 401 }
      );
    }

    const body = await req.json();

    // ✅ Verify user
    const profileRes = await apiClient.get(
      `${process.env.BACKEND_URL}/api/auth/profile`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("PROFILE:", profileRes.data);

    const user = profileRes.data.data?.user;

    if (!user || user.role !== "admin") {
      return NextResponse.json(
        { success: false, message: "Access denied. Admin role required." },
        { status: 403 }
      );
    }

    // ✅ Create blog
    const res = await apiClient.post(
      `${process.env.BACKEND_URL}/api/blogs`,
      body,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("BLOG CREATED:", res.data);

    return NextResponse.json(res.data);
  } catch (error) {
    console.error("ERROR:", error.response?.data || error.message);

    return NextResponse.json(
      error.response?.data || { message: error.message },
      { status: error.response?.status || 500 }
    );
  }
}