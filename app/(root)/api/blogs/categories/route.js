import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function GET() {
    try {
        const res = await apiClient.get(`${process.env.BACKEND_URL}/api/blogs/categories`);
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to get blog categories");
    }
}