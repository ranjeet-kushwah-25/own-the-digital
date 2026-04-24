import { NextResponse } from "next/server";
import apiClient from "@/lib/api-client";

export async function GET() {
  const res = await apiClient.get(`${process.env.BACKEND_URL}/api/blogs`);
  return NextResponse.json(res.data);
}

export async function POST(req) {
  const body = await req.json();

  const res = await apiClient.post(
    `${process.env.BACKEND_URL}/api/blogs`,
    body
  );

  return NextResponse.json(res.data);
}