import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function POST(req) {
    const body = await req.json();

    try {
        const res = await apiClient.put(
            `${process.env.BACKEND_URL}/api/auth/change-password`,
            body
        );
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to change password");
    }
}