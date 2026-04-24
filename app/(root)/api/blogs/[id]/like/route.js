import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function POST(req, { params }) {
    try {
        const res = await apiClient.post(
            `${process.env.BACKEND_URL}/api/blogs/${params.id}/like`
        );
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to like blog");
    }
}

export async function GET(req, { params }) {
    try {
        const res = await apiClient.get(
            `${process.env.BACKEND_URL}/api/blogs/${params.id}/like`
        );
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to get blog likes");
    }
}