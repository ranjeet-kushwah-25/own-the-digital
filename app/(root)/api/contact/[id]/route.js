import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function GET(req, { params }) {
  try {
    const res = await apiClient.get(
      `${process.env.BACKEND_URL}/api/contact/${params.id}`
    );
    return NextResponse.json(res.data);
  } catch (error) {
    return catchError(error, "Failed to get contact");
  }
}

export async function DELETE(req, { params }) {
  try {
    const res = await apiClient.delete(
      `${process.env.BACKEND_URL}/api/contact/${params.id}`
    );
    return NextResponse.json(res.data);
  } catch (error) {
    return catchError(error, "Failed to delete contact");
  }
}
