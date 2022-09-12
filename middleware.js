import { NextResponse } from "next/server";

export default function middleware(req) {
  const signedinPages = ["/"];
  if (signedinPages.find((page) => page === req.nextUrl.pathname)) {
    const token = req.cookies.get("APP_TOKEN");
    if (!token) {
      return NextResponse.redirect(new URL("/sigin", req.url));
    }
  }
}
