import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function GET(req, { params }) {
  try {
    const res = await apiClient.get(
      `${process.env.BACKEND_URL}/api/auth/verify-reset-token/${params.token}`
    );
    return NextResponse.json(res.data);
  } catch (error) {
    return catchError(error, "Invalid or expired reset token");
  }
}
