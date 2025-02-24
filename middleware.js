import { NextResponse } from "next/server";


export async function middleware(req) {
  const url = req.nextUrl;
  const token = req.cookies.get("token")?.value;
  console.log(req, "  : ",  token);

  if (!token && !url.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && url.pathname.startsWith("/sign-up")) {
    return NextResponse.redirect(new URL("/home", req.url));
  }

  return NextResponse.next(); // Allow request to continue
}

export const config = {
  matcher: ["/sign-up", "/login", "/home"],
};
