import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function GET() {
    try {
        const res = await apiClient.get(`${process.env.BACKEND_URL}/api/contact`);
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to get contacts");
    }
}

export async function POST(req) {
  const body = await req.json();

    try {
      const res = await apiClient.post(
          `${process.env.BACKEND_URL}/api/contact`,
          body
      );
      return NextResponse.json(res.data);
  } catch (error) {
      return catchError(error, "Failed to create contact");
  }
}