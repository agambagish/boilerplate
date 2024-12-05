import { type NextRequest, NextResponse } from "next/server";

import { betterFetch } from "@better-fetch/fetch";

import { type authClient } from "@/lib/auth-client";

export async function middleware(request: NextRequest) {
  const { data: session } = await betterFetch<typeof authClient.$Infer.Session>(
    "/api/auth/get-session",
    {
      baseURL: request.nextUrl.origin,
      headers: {
        cookie: request.headers.get("cookie") || "",
      },
    }
  );

  if (!session) {
    return NextResponse.redirect(new URL("/sign-in", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard"],
};
