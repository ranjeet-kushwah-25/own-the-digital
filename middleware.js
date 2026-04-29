import { NextResponse } from "next/server";

export function middleware(req) {
  const token = req.cookies.get("accessToken");
  const { pathname } = req.nextUrl;

  // Protect admin and blog management routes
  const protectedRoutes = [
    "/admin",
    "/blog/create",
    "/blog/edit"
  ];

  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));

  // Redirect to login if accessing protected routes without token
  if (isProtectedRoute && !token) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // If logged in and trying to access auth pages, redirect to blog create
  if (token && (pathname.startsWith("/login") || pathname.startsWith("/register"))) {
    return NextResponse.redirect(new URL("/blog/create", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/admin/:path*',
    '/blog/create',
    '/blog/edit/:path*',
    '/login',
    '/register'
  ]
};
