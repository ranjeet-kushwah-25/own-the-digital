import { NextResponse } from "next/server";
import { catchError } from "@/lib/helperFuncation";
import apiClient from "@/lib/api-client";

export async function GET(req, { params }) {
    try {
        const res = await apiClient.get(
            `${process.env.BACKEND_URL}/api/blogs/${params.id}`
        );
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to get blog");
    }
}

export async function PUT(req, { params }) {
    const body = await req.json();

    try {
        const res = await apiClient.put(
            `${process.env.BACKEND_URL}/api/blogs/${params.id}`,
            body
        );
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to update blog");
    }
}

export async function DELETE(req, { params }) {
    try {
        const res = await apiClient.delete(
            `${process.env.BACKEND_URL}/api/blogs/${params.id}`
        );
        return NextResponse.json(res.data);
    } catch (error) {
        return catchError(error, "Failed to delete blog");
    }
}