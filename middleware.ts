import { NextResponse } from "next/server";

export function middleware(req) {
  const { pathname } = req.nextUrl;

  // match /res1 /res2 /res-anything
  if (/^\/res[^/]+$/.test(pathname)) {
    return NextResponse.redirect(
      new URL(`/ar${pathname}`, req.url)
    );
  }
}