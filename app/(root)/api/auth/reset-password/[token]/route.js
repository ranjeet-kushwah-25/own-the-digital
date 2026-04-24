import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function POST(req, { params }) {
    const body = await req.json();

    try {
        const res = await apiClient.post(
            `${process.env.BACKEND_URL}/api/auth/reset-password/${params.token}`,
            body
        );
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to reset password");
    }
}