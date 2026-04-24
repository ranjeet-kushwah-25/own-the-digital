import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function GET(req) {
    try {
        const res = await apiClient.get(`${process.env.BACKEND_URL}/api/auth/profile`);
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to get profile");
    }
}

export async function PUT(req) {
    const body = await req.json();

    try {
        const res = await apiClient.put(
            `${process.env.BACKEND_URL}/api/auth/profile`,
            body
        );
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to update profile");
    }
}