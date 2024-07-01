import { NextResponse } from "next/server";

export const middleware = (request) => {
  return NextResponse.redirect(new URL("/", request.url));
};

export const config = {
  matcher: ["/todos"],
};

export default middleware;
