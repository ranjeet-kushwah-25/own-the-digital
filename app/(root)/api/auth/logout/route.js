import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function POST(req) {
    try {
        const res = await apiClient.post(`${process.env.BACKEND_URL}/api/auth/logout`);

        const response = NextResponse.json({ success: true });

        // Clear cookies
        response.cookies.set("accessToken", "", {
            httpOnly: true,
            secure: true,
            expires: new Date(0),
        });

        response.cookies.set("refreshToken", "", {
            httpOnly: true,
            secure: true,
            expires: new Date(0),
        });

        return response;
    } catch (error) {
        return catchError(error, "Logout failed");
    }
}