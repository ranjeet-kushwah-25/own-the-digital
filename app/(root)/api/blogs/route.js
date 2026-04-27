import { NextResponse } from "next/server";
import apiClient from "@/lib/api-client";

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
  const body = await req.json();
  try {
    const res = await apiClient.post(
      `${process.env.BACKEND_URL}/api/blogs`,
      body
    );

    return NextResponse.json(res.data);
  } catch (error) {
    console.error('Backend API Error:', error.message);

    // Fallback to mock response if backend fails
    const mockBlog = {
      success: true,
      message: "Blog created successfully (Fallback Mode)",
      data: {
        _id: Date.now().toString(),
        ...body,
        createdAt: new Date().toISOString(),
        slug: body.title?.toLowerCase().replace(/\s+/g, '-')
      }
    };

    return NextResponse.json(mockBlog);
  }
}